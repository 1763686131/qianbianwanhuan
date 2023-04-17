<template>
	<view>
		<view class="boxtitle">
			<view class="titing">

				<u-icon name="setting" color="#ffffff" size="28" @click="setuserinfo"></u-icon>
				<u-icon name="arrow-right" color="#ffffff" size="28"></u-icon>

			</view>
			<!-- 头像 -->
			<view class="userimage" @click="getuserinfo">
				<u-avatar v-if=" hasLogin &&userInfo.avatar_file&&userInfo.avatar_file.url"
					:src="userInfo.avatar_file.url" shape="circle" size="80"></u-avatar>
				<u-avatar v-else :src="src" shape="circle" size="80"></u-avatar>
			</view>
			<view class="postinos" @click="getuserinfo">
				<u-icon v-show="hasLogin" name="woman" color="#fc0016" size="20"
					style="margin-left: -30rpx;font-weight:700;"></u-icon> <text v-show="hasLogin"> 2023-03-03</text>
				<text v-show="!hasLogin"> 未登录</text>
			</view>
			<!-- 点赞 评论 写作 -->
			<view class="gongneng" @click="getuserinfo">
				<!-- 点赞 -->
				<view class="huozan">
					<view class="t"><u-count-to fontSize="27" bold color="#FFFFFF" :startVal="0"
							:endVal="userlikeinfo.ulike"></u-count-to></view>
					<!-- <text >2136</text> -->
					<text><text class="iconfont icon-like-fill"></text></text>
				</view>
				<!-- 评论 -->
				<view class="huozan">
					<view class="t"><u-count-to fontSize="27" bold color="#FFFFFF" :startVal="0"
							:endVal="0"></u-count-to></view>
					<text><text class="iconfont icon-message-fill"></text></text>
				</view>
				<!-- 写作 -->
				<view class="huozan" @click="userlist()">
					<view class="t"><u-count-to fontSize="27" bold color="#FFFFFF" :startVal="0"
							:endVal="userlikeinfo.uedit"></u-count-to></view>
					<text><text class="iconfont icon-edit-fill"></text></text>
				</view>
			</view>
		</view>
		<!-- 功能区 -->
		<view style="margin-top: 80rpx;">
			<u-grid :border="true" @click="click" class="">
				<u-grid-item bgColor="" v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
					<u-icon color="#822ab0" :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="40">
					</u-icon>
					<!-- <text class="grid-text">{{baseListItem.title}}</text> -->
				</u-grid-item>
			</u-grid>
			<u-toast ref="uToast" />
		</view>
		<!-- 弹出层 -->
		<view class="popup">
			<u-popup :customStyle="customStyl" :show="show" @close="close" mode="right">
				<kuozan :updete="updete"></kuozan>
			</u-popup>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	import {
		store,
		mutations
	} from '@/uni_modules/uni-id-pages/common/store.js'
	export default {

		data() {
			return {
				userlikeinfo: {
					ulike: '',
					uedit: '',
				},
				customStyl: {
					backgroundColor: "#7a50bb",
				},
				show: false,
				src: '../../static/logo.png',
				baseList: [{ //功能区命名
						name: 'file-text',
						title: '长文'
					},
					{
						name: 'lock',
						title: '密码'
					},
					{
						name: 'eye',
						title: '历史'
					}, {
						name: 'chat',
						title: '消息'
					}, {
						name: 'question-circle',
						title: '反馈'
					}, {
						name: 'arrow-upward',
						title: '退出'
					},
				],
				userInfo: null,
				hasLogin: null,

			};
		},
		onLoad() {
			this.getdata()
			this.userInfo = store.userInfo
			this.hasLogin = store.hasLogin
			if (store.hasLogin) {
				this.baseList[1].name = "lock-open"
				this.baseList[5].name = "backspace"
				uni.setNavigationBarTitle({ //动态设置标题
					title: this.userInfo.nickname || this.userInfo.username || this.userInfo.mobile
				})
			}
		},
		methods: {
			async getdata() {//获取用户点赞  评论   创作数量
				if (!store.hasLogin) return //用户未登录
				let res = await db.collection("qianhuan-news-articles").where(`user_id == $cloudEnv_uid`).count()
				this.userlikeinfo.uedit = res.result.total

				//查询点赞
				let lickcoun = await db.collection('qianhuan-news-articles').where(`user_id == $cloudEnv_uid`).groupBy(
					'user_id').groupField('sum(like_count) as mergedSales').get()
				
				this.userlikeinfo.ulike=lickcoun.result.data[0].mergedSales

			},


			close() {
				this.show = false
				// console.log('close');
			},
			click(name) {
				// this.$refs.uToast.success(`点击了第${name}个`)
				if (name == 2) this.show = true
				if (name == 5) this.logout()
				if (name == 4) this.feedback()

			},

			getuserinfo() { //未登录触发   //暂时使用
				if (!store.hasLogin) {
					this.userinfogo()
				}
			},
			logout() { //退出登录

				if (!store.hasLogin) {
					this.$refs.uToast.error(`你未登录`)
					return
				}
				uni.showModal({
					title: "确定退出？",
					success: res => {
						if (res.confirm) {

							mutations.logout().then(aee => {
								location.reload()
							})

							// setTimeout(()=>{
							// 	this.$router.go(0)
							// },800)
							// location.reload()
							this.userInfo = null
							this.hasLogin = null
						}
					}
				})
			},

			userinfogo() { //登录
				uni.navigateTo({
					url: "/uni_modules/uni-id-pages/pages/login/login-withpwd"
				})
			},
			userlist() { //文章列表
				if (!store.hasLogin) {
					this.$refs.uToast.error(`你未登录`)
					return
				}
				uni.navigateTo({
					url: "/pages/qianhuan-news-articles/list"
				})
			},
			//反馈按钮
			feedback() {
				uni.navigateTo({
					url: "/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback"
				})
			},
			// uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback
			//设置页面
			setuserinfo() {
				let route=this.$mp.page.route
				if (!store.hasLogin){
					this.$refs.uToast.error(`你未登录`)
					return
				// uni.navigateBack()
				// 	uni.navigateTo({
				// 		url:"/uni_modules/uni-id-pages/pages/login/login-withpwd?uniIdRedirectUrl=/"+route
				// 	})
				}else{
					uni.navigateTo({
						url: "/uni_modules/uni-id-pages/pages/userinfo/userinfo"
					})
				}
				
			}
		},
		computed: {
			updete() {
				let res = this.uniIDHasRole('admin') || this.uniIDHasRole('1') || this.uniIDHasRole('3')

				return res
			}
		}

	}
</script>

<style lang="scss" scoped>
	/deep/.u-grid-item {
		height: 200rpx;


	}


	.boxtitle {
		// padding-top: var(--status-bar-height);
		width: 100%;
		// height: 500rpx;
		border-bottom-left-radius: 2%;
		border-bottom-right-radius: 2%;
		background-color: #7a50bb;
		background: linear-gradient(#7a50bb, #9849bb);

		.titing {
			padding: 20rpx;
			display: flex;
			height: 80rpx;
			justify-content: space-between;
		}

		.userimage {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 40rpx;
		}

		.postinos {
			color: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 40rpx;
		}

		/deep/ .u-avatar--circle {
			border: #FFFFFF solid 8rpx;
		}

		.gongneng {
			color: #FFFFFF;
			display: flex;
			justify-content: space-evenly;


			.huozan {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 30%;
				margin-bottom: 25rpx;

				.t {
					font-weight: 700;
					font-size: 50rpx;
					margin-bottom: 10rpx;
				}
			}

		}
	}
</style>
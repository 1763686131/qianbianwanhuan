<template>
	<view>
		<view class="comment-item" @click="showkuang()">
			<view class="avatar">
				<u-avatar :src="giveAvatar(usercomments)" size="26"></u-avatar>
			</view>

			<view class="wrap">
				<view class="username">{{giveName(usercomments)}}<u-icon
						@click.native.stop="removecomment(usercomments)" name="close"
						v-show="!iconshow && useridd==usercomments.user_id[0]._id ||uniIDHasRole('admin') || uniIDHasRole('1') || uniIDHasRole('3')"
						color="#999999" size="18"></u-icon></view>
				<view class="comment-content">{{usercomments.comment_content}}</view>
				<view class="info">
					<view v-if="!showtime" class="reply-btn">{{usercomments.field4 || ''}} 回复 </view>
					<view>

						<uni-dateformat :date="usercomments.comment_date" :threshold="[60000,3600000*24*30]">
						</uni-dateformat>
					</view>
					<view>{{usercomments.province}}</view>
				</view>
			</view>
		</view>



	</view>
</template>

<script>
	const updateinc = uniCloud.importObject("utilsObj", {
		customUI: true
	})
	import {
		store,
	} from '@/uni_modules/uni-id-pages/common/store.js'
	import {
		giveName,
		giveAvatar
	} from "../../utils/tools.js"
	const db = uniCloud.database();
	const utilsObj = uniCloud.importObject("utilsObj", {
		customUI: true
	});


	export default {
		props: ["usercomments", "userid", "showtime","iconshow"],
		name: "comment-item",
		data() {
			return {
				show: false,
				useridd: '',
			};

		},
		mounted() {
			this.useridd = store.userInfo._id
		},
		methods: {
			giveName,
			giveAvatar,

			open() {
				this.show = true
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			//弹起框
			showkuang() {
				this.$emit("reoveEnv", {
					item: this.usercomments,
					_id: this.userid,
				})
			},
			//跳转去回复页面
			removecomment(item) {
				uni.showModal({
					title: "确认删除？",
					success: (res) => {
						if (res.confirm) {
							this.rememover()
							uni.showLoading({
								title: "删除中..."
							})
						}
					}
				})
			},

			rememover() { //删除函数，像服务器发请求
				if (!this.usercomments._id) {
					location.reload()

					return
				}
				db.collection("qianhuan-news-comments").doc(this.usercomments._id).update({
					"comment_status": 1,
				}).then(res => {
					uni.hideLoading()
					uni.showToast({
						title: "删除成功",
					})
					this.$emit("reoveEnv", {
						id: this.usercomments._id
					})
					updateinc.addingOrTaking("qianhuan-news-articles", "comment_count", this.usercomments
						.article_id, -1)

				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment-item {
		display: flex;

		.wrap {
			flex: 1;
			padding-left: 20rpx;
			padding-bottom: 10rpx;

			.username {
				font-size: 26rpx;
				color: #666;
				padding: 10rpx 0;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.iconfont {
					font-size: 20rpx;
					padding: 10rpx;
					color: #999;
				}
			}

			.comment-content {
				font-size: 34rpx;
				color: #111;
				line-height: 1.8em;
			}

			.info {
				font-size: 26rpx;
				color: #666;
				display: flex;
				padding: 10rpx 0;
				align-items: center;

				view {
					margin-right: 25rpx;
				}

				.reply-btn {
					padding: 6rpx 18rpx;
					background: #e4e4e4;
					border-radius: 30rpx;
				}
			}
		}
	}
</style>
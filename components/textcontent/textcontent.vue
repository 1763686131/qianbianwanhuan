<template>
	<view class="textcontent">
		<view class="head">
			<view class="userinfo">
				<view class="avatar">
					<!-- :src="item.user_id[0].avatar_file.url || " -->
					<image :src="giveAvatar(item)" mode=""></image>
				</view>
				<view class="name">
					{{giveName(item)}}
				</view>
				<view class="time">
					<uni-dateformat :date="item.publish_date" :threshold="[60000,3600000*24*30]"></uni-dateformat>
				</view>
			</view>
			<!-- 更多 -->
			<view class="more" @click="clickshowlist()">
				<u-icon name="more-dot-fill" color="#606266" size="28"></u-icon>
			</view>
		</view>
		<view class="body">
			<view class="title" @click="godetail(item._id)">
				<text>{{item.title}}</text>
				<view class="text">
					<view class="t" @click.stop="godetail(item._id)">
						<text>{{item.dispalytext}}</text>
					</view>
				</view>
				<view class="piclist">
					<view class="pic" :class="item.picurls.length==1 ? 'only': '' " v-for="(pic,index) in item.picurls"
						:key="pic">
						<image @click.stop="clickpic(index)" :src="pic" mode="aspectFill"></image>
					</view>

				</view>
			</view>
		</view>
		<view class="info">
			<view class="box">
				<text class="iconfont icon-eye"></text> <text>{{item.view_count}}</text>
			</view>
			<view class="box">
				<text class="iconfont icon-message" @click="godetail(item._id)"></text>
				<text>{{item.comment_count?item.comment_count: "评论"}}</text>
			</view>
			<view class="box" :class="item.userlike ? 'active' : ''" >
				<text v-show="!item.userlike" class="iconfont icon-like" @click="islikeg" ></text>
				<text v-show="item.userlike" class="iconfont icon-like-fill" @click="islikeg" ></text>
				<text>{{ item.like_count?item.like_count : "点赞"}}</text>
			</view>
		</view>

		<!-- 更多按钮 -->
		<view class="">
			<u-action-sheet  @close="close" @select="selectClick"  :closeOnClickOverlay="true" :closeOnClickAction="false" round="5" :actions="list" :show="show"></u-action-sheet>
		</view>
	</view>
</template>

<script>
	const db=uniCloud.database()
	import {islick} from "@/utils/islike.js"
	import {
		giveName,
		giveAvatar
	} from "@/utils/tools.js"
	export default {
		props: ["item","islike","like_count"],
		name: "textcontent",
		data() {
			return {
				disabledshow:false,//按钮禁用或打开
				show:false,
				list: [{
						index:0,
						name: '修改',
						color: '#57c02e',
						fontSize: '20',
						disabled:true,
					},{
						index:1,
						name: '删除',
						color: '#f36d6f',
						disabled:true,
					},

				]
			};
		},
		onLoad() {
			
		},
		methods: {
			giveName,
			giveAvatar,
			//点击图片
			clickpic(index) {
				uni.previewImage({
					urls: this.item.picurls,
					current: index,
				})
			},
			
			//点赞按钮
			islikeg(){
				
				let nowtime=Date.now()
				
				if(nowtime - this.item.nowtime < 3000 ){
					this.item.nowtime=nowtime
					uni.showToast({
						title:"操作频繁",
						icon:"none"
					})
					return
				}
				this.item.nowtime=nowtime
				
				// this.item.userlike ? this.item.like_count-- : this.item.like_count++
				// this.item.userlike = !this.item.userlike
				let like_count=this.item.like_count
				this.islike ? like_count-- : like_count++
				let isLiek=!this.item.userlike
				this.$emit("update:islike",isLiek)
				this.$emit("update:like_count",like_count)
			
			
			
				islick(this.item._id)
				
				
					
			
				
				
				
			},
			
			
			
			//点击选项按钮
			selectClick(e){
				let dispaly=e.index == 1 ? true :false
				if (dispaly){
					this.deletedata()
				}else{
					
				}
			},
			
			//删除函数
			async deletedata(){
				uni.showLoading({
					title:"删除中..."
				})
			let res=await db.collection("qianhuan-news-articles").doc(this.item._id).update({
					userdelete:true
				}).then(res=>{
					uni.showToast({
						title:"删除成功",
						icon:"success"
					})
					uni.hideLoading()
					this.show=false
					this.$emit("deletedata")
				})
			},
			
			//点击跟多按钮
			clickshowlist(){
				this.show=true
				let uid=uniCloud.getCurrentUserInfo().uid  //从缓存里面拿ID
				if(uid==this.item.user_id[0]._id ||this.uniIDHasRole('3') || this.uniIDHasRole('admin') || this.uniIDHasRole('1')){
					this.list.forEach(item=>{
						item.disabled=false
					})
					
				}
			
			},
			//点击遮挡层
			close(){
				this.show=false
			},
			//点击内容和标题跳转
			godetail(id) {
				uni.navigateTo({
					url: "/pages/detail/detail?id=" + id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.textcontent {
		.head {
			display: flex;
			font-size: 32rpx;
			align-items: center;
			justify-content: space-between;

			.userinfo {
				display: flex;
				align-items: center;

				.avatar {
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;
					border-radius: 50%;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
						display: block;
					}
				}

				.name {
					color: #222;
					padding-left: 10rpx;
				}

				.time {
					color: #888;
					font-size: 22rpx;
					padding-left: 20rpx;
				}
			}

			.more {
				padding: 5rpx;

				.iconfont {
					font-size: 50rpx;
					color: #888;
				}
			}

		}

		.body {
			padding: 15rpx 0 30rpx;

			.title {
				font-size: 40rpx;
				color: #000;
				font-weight: 600;
				text-align: justify;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			.text {
				padding-top: 10rpx;
				padding-bottom: 10rpx;
				font-size: 30rpx;
				text-align: justify;
				color: #888;

				.t {
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}

			.piclist {
				display: flex;
				padding-top: 20rpx;

				.pic {
					width: 225rpx;
					height: 225rpx;
					margin-right: 6rpx;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
					}

					&:first-child {
						border-radius: 20rpx 0 0 20rpx;
					}

					&:last-child {
						border-radius: 0 20rpx 20rpx 0;
					}

					&.only {
						border-radius: 20rpx;
					}

				}
			}

		}

		.info {
			display: flex;
			align-items: center;
			justify-content: space-around;
			font-size: 26rpx;
			color: #333;

			.box {
				display: flex;
				align-items: center;
				padding: 15rpx 0 5rpx;
				flex: 1;
				display: flex;
				justify-content: center;

				.iconfont {
					font-size: 40rpx;
					padding-right: 10rpx;
				}
			}

			.box.active {
				color:#7a50bb
			}

		}


	}
</style>
<template>
	<view class="reply" @touchmove.stop.prevent="moveHandle" :style="sht">

		<view class="top">
			<comment-item :iconshow="true" :showtime="true" :usercomments="usercomments" :userid="userid"></comment-item>
		</view>

		<view class="list">
			<scroll-view @scrolltolower="scrolltolower" lower-threshold="100" style="height: 90%;" scroll-y="true">
				<view class="row" v-for="(item,index) in userpinlun" :key="index">

					<comment-item @reoveEnv="reoveEnv" :showtime="true" :usercomments="item" :userid="item.user_id[0]._id"></comment-item>
				</view>
			</scroll-view>
		</view>

		<view>
		<!-- 	//用户评论 -->
			<comment-frame :comments="comments" :placeholder="'回复:'+giveName(usercomments)" @usercommie="usercommie"></comment-frame>
		</view>

	</view>
</template>


<script>
	import {
		giveName,
		giveAvatar
	} from "../../utils/tools.js"
	const db=uniCloud.database()
	export default {
		props: ["usercomments", "userid",],
		name: "scrollviewbox",
		data() {
			return {
				sht:{
					top:"100%",
					
				},
				
				placeholder:"说点什么把٩(◕‿◕｡)۶",//提示用户输入
				comments:{
					
					article_id:"",   //article_id
					comment_type:1,  //分级
					reply_user_id:"",  //user_id[0]._id

					reply_comment_id:"",//._id
					
				},
				userpinlun:[],//评论列表
				
			};
		},
		onLoad() {
          ;
		},
		onUnload() {
				
		},
		mounted() {
			this.comments={
				article_id:this.usercomments.article_id,   //article_id
				comment_type:1,  //分级
				reply_user_id:this.usercomments.user_id[0]._id,  //user_id[0]._id
				reply_comment_id:this.usercomments._id, //._id
			}
			this.usercomment()
		},
		methods: {
			giveName,
			giveAvatar,
			
			//评论列表
			usercomment(){
				let commentstemp= db.collection("qianhuan-news-comments").where(`
article_id == "${this.usercomments.article_id}" && comment_status!= 1 && comment_type != 0 && reply_comment_id == "${this.usercomments._id}"`).orderBy("comment_date desc").limit(5).getTemp()
				let usertemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp()
				db.collection(commentstemp,usertemp).get().then(res=>{
					
					this.userpinlun=res.result.data
					
				})
			},
			
			
			
			
			scrolltolower(){
				uni.showToast({
					title:"没有更多了"
				})
			},
			showtime(){
				this.sht={
						top:"300rpx",
						transition:"top 1s"
				}
				
			},
			shownoyime(){
				this.sht={
						top:"100%",
						transition:"top 1s"
				}
			},
			
			//删除的回调
			reoveEnv(e){
				
				if(e.id) location.reload()
			},
			usercommie(){//评论自定义事件
				
			},
			
			moveHandle() {}
		},

	}
</script>

<style lang="scss" scoped>
	.reply {
		width: 100%;
		z-index: 999;
		position: fixed;
		top: 400rpx;
		left: 0;
		border-radius: 2%;
		background-color: #eee;
		

		.top {
			padding: 30rpx 30rpx 0;
			border-top-right-radius: 2%;
			border-top-left-radius: 2%;
			background-color:#eee;
			border-bottom: 15rpx solid #7a50bb;
		}

		.list {
			height: 750rpx;
			padding: 10rpx 30rpx  30rpx;
			padding-bottom: 300rpx;

			.row {
				padding-bottom: 0rpx;
			}
		}
	}
</style>
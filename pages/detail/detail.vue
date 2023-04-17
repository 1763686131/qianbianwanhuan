<template>
	<view class="detail">
		<view class="container">

			<view v-if="skeleton">
				<u-skeleton rows="5" title loading></u-skeleton>
			</view>
			<view v-else>
				<view class="title">{{detaillist.title}}</view>
				<view class="userinfo">
					<view class="avatar">
						<image :src="giveAvatar(detaillist)" mode="aspectFill"></image>

					</view>
					<view class="text">
						<view class="name">{{giveName(detaillist)}}</view>
						<view class="small">
							<uni-dateformat :date="detaillist.publish_date" format="yyyy年MM月dd日 hh:mm:ss">
							</uni-dateformat> · 发布于{{detaillist.province}}
						</view>
					</view>
				</view>
				<view class="content">
					<u-parse :content="detaillist.content" :tagStyle="tagstyle"></u-parse>
				</view>

				<view class="like">
					<view class="btn" @click="clicklike" :class="detaillist.userlike ? 'active':''">
						<text class="iconfont icon-like-fill"></text>
						<text>{{!detaillist.like_count ? '': detaillist.like_count}}</text>
					</view>
					<view class="users">
						<image v-for="(item,index) in this.imagearr" :key="index" src="../../static/iconfont/username.png" mode="aspectFill"></image>
					</view>
					<view class="text"><text class="num">{{detaillist.view_count}}</text>人看过</view>
				</view>

			</view>
			<view class="comment" >
				<view v-if="usercomments.length<1" style="margin-bottom: 90rpx;">
					<u-empty mode="comment" icon="https://cdn.uviewui.com/uview/empty/comment.png">
						
					</u-empty>
				</view>
				
			</view>
		<!--评论信息  -->
			<view class="cotent">
				<view class="item" v-for="item in usercomments" :key="item._id">
					<comment-item @click.native="tfvok()" @reoveEnv="reoveEnv" :usercomments="item" :userid="userid" ></comment-item>	
					
					
				</view>
				<!-- 触底 -->
				<view v-if="usercomments.length >3 ">
					<uni-load-more :status="loadmore"></uni-load-more>
				</view>
			</view>
			
			<!-- 弹起盒子 -->
			<u-overlay :show="show" :z-index ="990" @click="zezhao()"></u-overlay>
			<scrollviewbox v-if="show" ref="refsa" :usercomments="items" :userid="item_id"></scrollviewbox>
			
		<!-- 评论输入 -->	
		
			<comment-frame :comments="comments" :placeholder="placeholder" @usercommie="usercommie"></comment-frame>
			
		</view>
	</view>
</template>

<!-- 详情页面 -->
<script>
	const db = uniCloud.database()
	const dbCmd=db.command
	const updateinc = uniCloud.importObject("utilsObj", {
		customUI: true
	})
	import {
		store,
	} from '@/uni_modules/uni-id-pages/common/store.js'
	import {
		islick
	} from "@/utils/islike.js"
	import {
		giveName,
		giveAvatar
	} from "@/utils/tools.js"


	export default {
		name: "detail",
		data() {
			return {
				loadmore:"more",  //触底加载更多
				loging:false,//触底的判断
				items:"",//弹起盒子的值
				item_id:"",//弹起盒子的ID
				itemshow:true,
				
				placeholder:"说点什么把٩(◕‿◕｡)۶",//提示用户输入
				
				show:false,
				userid:"",
				skeleton: true, //骨架
				detailid: "", //获取上一页的ID
				tagstyle: { //修改富文本渲染器
					p: "line-height:1.7em;font-size:16px;"
				},
				detaillist: null, //从数据库拿的数据
				imagearr:[],
				comments:{
					article_id:"",
					comment_type:0,  //分级
				},
				usercomments:[],//用户评论数据
			};
		},
		onReachBottom() {//触底函数
			this.loadmore="loading"
			if(this.loging) {
				
				 this.loadmore="noMore"
				 return
			}
		
			this.usercomment()
			
		},
		onLoad(e) {
			// store.userInfo._id
			this.userid=uniCloud.getCurrentUserInfo().uid
			if (!e.id) {
				this.datano()
				return
			}
			this.usersimage()
			this.detailid = e.id
			this.comments.article_id=e.id
			this.getdata()
			this.updateinc() //自增
			this.usercomment() //评论

		},
		methods: {
			giveName,
			giveAvatar,
			//判断是否有ID or 错误页面
			datano() {
				uni.showToast({
					title: "参数有误",
					icon: 'none'
				})
				setTimeout(() => {
					uni.reLaunch({
						url: "/pages/forum/forum"
					})
				}, 800)
			},
			zezhao(){//遮挡层
				this.$refs.refsa.shownoyime()
				this.show = false
				this.loging=false
				// this.usercomments=[]
				// this.usercomment()
			},
			
			tfvok(){//盒子
				this.show=true
				setTimeout(()=>{
					this.$refs.refsa.showtime()
				},100)
				
				
				// console.log(this.$refs.refsa.showtime());
			},
		
			
			//删除的回调
			reoveEnv(e){
				
				if(e.id){
					let index=this.usercomments.findIndex(item=>{
						return item._id==e.id
					})
					this.usercomments.splice(index,1)
				}else{
					this.items=e.item
					this.item_id=e._id
					this.itemshow=false
					this.tfvok()
				}
				
			},
			
			
			
			//用户评论 获取列表数
			async usercomment(){
				let commentstemp= db.collection("qianhuan-news-comments").where(`article_id == "${this.detailid}" && comment_status!= 1 && comment_type !=1`).orderBy("comment_date desc").skip(this.usercomments.length).limit(5).getTemp()
				let usertemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp()
				let res=await db.collection(commentstemp,usertemp).get()
		
				//获取评论回复数量
				let idarr=res.result.data.map(item=>{
					return item._id
				})
				 let arplyarr=await db.collection("qianhuan-news-comments").where({					
					comment_status:0,
					reply_comment_id:dbCmd.in(idarr),
				}).groupBy('reply_comment_id').groupField('count(*) as field4').get()
			
				res.result.data.forEach(item=>{
					let index=arplyarr.result.data.findIndex(find=>{
						return	find.reply_comment_id  == item._id 
					})
					if(index > -1) item.field4=arplyarr.result.data[index].field4
				})
				
				let newarr=[...this.usercomments,...res.result.data]
				
				
				if(res.result.data==0){ 
					this.loadmore="noMore"
					this.loging=true
				}
				this.usercomments=newarr
			
				
			},
			
			
			//评论传过来的自定义事件
			usercommie(e){
			
				this.usercomments.unshift({
					...e,
					user_id:[store.userInfo,],
					comment_date:Date.now()
				})
			},
			
			clicklike() { //点赞按钮
				
				let nowtime=Date.now()
				if(nowtime - this.detaillist.nowtime < 3000 ){
					this.detaillist.nowtime=nowtime
					uni.showToast({
						title:"操作频繁",
						icon:"none"
					})
					return
				}
				this.detaillist.nowtime=nowtime
				
				this.detaillist.userlike ? this.detaillist.like_count-- : this.detaillist.like_count++
				this.detaillist.userlike = !this.detaillist.userlike
				
				islick(this.detailid)//封装的函数
				

			},
			async usersimage() { //获取页面浏览过的用户头像

				let liketemp = db.collection("qianhuan_news_like").where(`article_id == "${this.detailid}"`).getTemp()
				let usertemp = db.collection("uni-id-users").field("_id,avatar_file").getTemp()
				let res= await db.collection(usertemp, liketemp).get()
				this.imagearr=res.result.data
			},

			updateinc() { //访问量++++++
				/**
				 * @param {Object} table 	//数据表
				 * @param {Object} attr 	//属性
				 * @param {Object} id		//id
				 * @param {Object} num		//1=自增，-1自减
				 */
				updateinc.addingOrTaking("qianhuan-news-articles", "view_count", this.detailid, 3)
			},

			getdata() { //发请求，从数据库拿页面数据
				let arttemp = db.collection("qianhuan-news-articles").where(`_id=='${this.detailid}'`).getTemp();
				let usertemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp()
				let userlike = db.collection("qianhuan_news_like").where(
					`article_id=="${this.detailid}" && user_id==$cloudEnv_uid `).getTemp();

				let taemparr = [arttemp, usertemp]
				if (store.hasLogin) taemparr.push(userlike)
				db.collection(...taemparr).get({
					getOne: true
				}).then(res => {

					if (!res.result.data) {
						this.datano()
						return
					}
					this.skeleton = false
					uni.setNavigationBarTitle({
						title: res.result.data.title
					})
					//获取点赞数组，如果有，把值付为ture
					let likeuser = false
					if (store.hasLogin) likeuser = res.result.data._id.qianhuan_news_like.length ? true : false
					res.result.data.userlike = likeuser
					this.detaillist = res.result.data

				})
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		background: #f8f8f8;
		min-height: calc(100vh - var(--window-top));

		.cotent{
			border-radius: 3%;
			padding: 30rpx;
			padding-bottom: 90rpx;
			background-color:#f8f8f8 ;
			
		}
		
		.container {
			padding: 30rpx;
			background: #fff;

			.title {
				font-size: 46rpx;
				color: #333;
				line-height: 1.4em;
				font-weight: 600;
			}

			.userinfo {
				padding: 20rpx 0 50rpx;
				display: flex;
				align-items: center;

				.avatar {
					width: 60rpx;
					height: 60rpx;
					padding-right: 15rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}

				.text {
					font-size: 28rpx;
					color: #555;

					.small {
						font-size: 20rpx;
						color: #999;
					}
				}
			}

			.content {}

			.like {
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 80rpx 50rpx 50rpx;

				.btn {
					width: 260rpx;
					height: 120rpx;
					background: #e4e4e4;
					border-radius: 100rpx;
					color: #fff;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					font-size: 28rpx;

					.iconfont {
						font-size: 50rpx;
					}

					&.active {
						background: #7a50bb;
					}
				}

				.text {
					font-size: 26rpx;
					color: #666;

					.num {
						color: #0199FE
					}

					.spot {
						padding: 0 10rpx;
					}
				}

				.users {
					display: flex;
					justify-content: center;
					padding: 30rpx 0;

					image {
						width: 50rpx;
						height: 50rpx;
						border-radius: 50%;
						border: 3px solid #fff;
						margin-left: -20rpx;
					}
				}
			}

		}
	}
</style>
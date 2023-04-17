<template>
	<view>
		<!-- 导航栏 -->
		<view class="tab">
			<u-tabs :list="list1" @click="click" lineColor="#7a50bb" :activeStyle="{
			    color: '#303133',
			    fontWeight: 'bold',
			    transform: 'scale(1.05)'
			}" :inactiveStyle="{
			    color: '#606266',
			    transform: 'scale(1)'
			}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"></u-tabs>
		</view>



		<!-- 骨架屏 -->
		<view class="skeleton">
			<u-skeleton rows="15" title :loading="skeleton"></u-skeleton>
		</view>
		<!-- 主题内容 -->
		<view class="content">
			<view class="item" v-for="(item,index) in arr" :key="index">
				<textcontent :like_count.sync="item.like_count" :islike.sync="item.userlike" :item="item"
					@deletedata="deletedata"></textcontent>
			</view>
		</view>

		<view>
			<uni-load-more :status="loadmore"></uni-load-more>
		</view>

		<!-- 搜索按钮 -->
		<u-popup :show="searchshow" mode="center">
			<view>
				<u-search @custom="searchclick" @search="searchclick" shape="square" :actionStyle="searchstyle"
					placeholderColor="#7a50bb" searchIconSize="32" color="#7a50bb" searchIconColor="#7a50bb"
					placeholder="千城为什么那么帅" v-model="searchvalue"></u-search>

			</view>
		</u-popup>
		<!-- 编辑按钮 -->
		<uni-fab :content="content" :pattern="pattern" horizontal="right" vertical="bottom" direction="horizontal"
			@trigger="goadd">
		</uni-fab>

	</view>

	</view>
</template>

<script>
	const db = uniCloud.database()
	const dbCmd = db.command

	import {
		store,
		mutations
	} from '@/uni_modules/uni-id-pages/common/store.js'
	export default {
		name: "forum",
		data() {
			return {
				searchshow: false,
				searchstyle: {
					color: "#7a50bb"
				},
				searchstylearr:[],
				searchvalue: '', //搜索框的值
				category: null, //栏目的值
				loadmore: "more", //触底按钮
				loging: false,
				pattern: { //按钮配置
					color: "#FFFFFF",
					backgroundColor: "#974abb",
					buttonColor: "#7a50bb",
				},
				content: [{
						iconPath: '/static/iconfont/highlight.png',

						text: "写文章",
						active: false
					},
					{
						iconPath: '/static/iconfont/search.png',

						text: "搜索",
						active: false
					},
					{
						iconPath: '/static/iconfont/sync.png',

						text: "刷新",
						active: false
					},
					{
						iconPath: '/static/iconfont/logtop.png',

						text: "返回顶部",
						active: false
					},
				],
				//导航栏
				list1: [{
						name: '最新',
						type: "publish_date",
					}, {
						name: '热门',
						type: "view_count"
					},
					{
						name: '日常',
						tyoe: 0
					},
					{
						name: '游戏',
						tyoe: 1
					},
					{
						name: '美图',
						tyoe: 2
					}
				],
				skeleton: true, //骨架屏
				arr: [], //所有数据
				listindex: 0, //筛选
			}
		},
		// mounted() {
		// 	this.getdata()
		// },
		onLoad() {
			this.getdata()
		},
		// onShow: function() {
		// 	this.arr = []
		// 	this.getdata()
		// },
		// onHide: function() {
		// 	console.log(11);
		// 	this.arr=[]s
		// 	this.getdata()
		// },
		onReachBottom() { //触底函数
			this.loadmore = "loading"
			if (this.loging) {

				this.loadmore = "noMore"
				return
			}

			this.getdata()

		},
		methods: {


			deletedata() { //子组件删除函数自定义函数
				this.skeleton = true //骨架屏
				this.arr = []
				this.getdata()
			},
			//导航栏切换按钮
			click(item) {
				this.skeleton = true //骨架屏
				this.arr = []
				this.loging = false
				this.loadmore = "more"
				if (item.name == "最新") {
					this.listindex = 0
					this.category = null
				}
				if (item.name == "热门") {
					this.listindex = 1
					this.category = null
				}
				if (item.name == "日常") this.category = 0
				if (item.name == "游戏") this.category = 1
				if (item.name == "美图") this.category = 2

				this.getdata()


			},
			//编辑按钮
			goadd(e) {
				if (e.index == 0) {
					uni.navigateTo({
						url: "/pages/edit/edit"
					})
				}
				if (e.index == 1) {
					this.searchshow = true
				}
				if (e.index == 2) {
					this.category = null
					uni.navigateBack(); //刷新页面
				}
				if (e.index == 3) {
					uni.pageScrollTo({
						scrollTop: 0
					});
				}

			},
			searchclick() { //搜索按钮
				this.searchshow = false
				if(!this.searchvalue){
					return
				}
				this.arr=[]
				console.log(this.searchvalue);
				let arttemp=db.collection('qianhuan-news-articles').where({title:new RegExp(this.searchvalue)}).field("title,user_id,picurls,dispalytext,comment_count,like_count,publish_date,view_count").getTemp()
				let usertemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp()
				db.collection(arttemp, usertemp).orderBy("publish_date desc").get().then( res => {
						if(res.result.data.length){
							this.arr=res.result.data
							this.loadmore = "noMore"
						}else{
							this.loadmore = "noMore"
						}
					})
				
				
				// .get().then(res => {
					
				// 	this.arr=[]
				// 	res.result.data.forEach(item => {
				// 		if(item.title.indexOf(this.searchvalue) > -1){
				// 			this.arr.push(item)
				// 		}
				// 	})
				// })
			},

			getdata() { //临表查询
				//&& article_status!=0
				let arttemp = this.category != null ? db.collection("qianhuan-news-articles").where(
						`category==${this.category} && userdelete!=true`).field(
						"title,user_id,picurls,dispalytext,comment_count,like_count,publish_date,view_count")
					.getTemp() :
					db.collection("qianhuan-news-articles").where(`userdelete!=true`).field(
						"title,user_id,picurls,dispalytext,comment_count,like_count,publish_date,view_count")
					.getTemp() //文章表的领表查询
				//用户临表查询，用户id，用户网名，用户头像
				let usertemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file")
					.getTemp()

				db.collection(arttemp, usertemp).orderBy(this.list1[this.listindex].type, "desc").skip(this.arr
						.length)
					.limit(6).get().then(async res => {

						if (res.result.data.length == 0) {
							this.loadmore = "noMore"
							this.loging = true

						}
						let dataarr = [...this.arr, ...res.result.data]


						//数据返回页面
						this.arr = dataarr
						this.skeleton = false //骨架屏

						//筛选点赞记录
						let listarr = []


						if (store.hasLogin) {
							dataarr.forEach(item => {
								listarr.push(item._id)
							})
							let resarr = await db.collection("qianhuan_news_like").where({
								article_id: dbCmd.in(listarr),
								user_id: uniCloud.getCurrentUserInfo().uid
							}).get()

							resarr.result.data.forEach(item => {
								let index = dataarr.findIndex(find => {
									return item.article_id == find._id
								})
								dataarr[index].userlike = true
							})
						}





					})
			}
		}

	}
</script>

<style lang="scss" scoped>
	.skeleton {
		padding: 20rpx;
	}

	.content {

		.item {
			padding: 30rpx;
			border-bottom: 20rpx #f7f7f7 solid;
		}
	}

	.goadd {
		color: aliceblue;
		width: 100rpx;
		height: 100rpx;
		background-color: #7a50bb;
		text-align: center;
		line-height: 100rpx;
		position: fixed;
		font-size: 60rpx;
		right: 60rpx;
		bottom: 180rpx;
		border-radius: 50%;
		box-shadow: 0 0 20rpx rgba(102, 50, 176, 1.0);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
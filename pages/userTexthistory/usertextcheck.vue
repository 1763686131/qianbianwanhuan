<template>
  <view class="container">
    <unicloud-db ref="udb" orderby="publish_date desc" :where="`userdelete!=true && article_status!=1`" v-slot:default="{data, pagination, loading, hasMore, error}" :collection="collectionList" field="user_id,title,dispalytext,province,content,article_status,view_count,like_count,is_sticky,comment_count,last_comment_user_id,picurls,publish_date,publish_ip,last_modify_date,last_modify_ip">
      <view v-if="error">{{error.message}}</view>
      <view v-else-if="data">
		  
		  
		  
		  <uni-card  v-for="(item, index) in data" :key="index" 
		  >
		  <text style="display: block;"  @click="handleItemClick(item._id)">{{item.title}}</text>
			<view class="unicard">
				<u-button class="ubutton" type="primary" size="mini" text="修改"></u-button>
				<u-button class="ubutton" type="error" size="mini"  text="删除"></u-button>	
				<u-button class="ubutton" hoverStopPropagation  @click="passtheaudit(item)" type="success" size="mini"  text="通过审核"></u-button>
			</view>
		  </uni-card>
  
	  </view>
      <uni-load-more :status="loading?'loading':(hasMore ? 'more' : 'noMore')"></uni-load-more>
    </unicloud-db>
  </view>
</template>

<script>
  const db = uniCloud.database()
  export default {
    data() {
      return {
        collectionList: "qianhuan-news-articles",
        loadMore: {
          contentdown: '',
          contentrefresh: '',
          contentnomore: ''
        }
      }
    },
    onPullDownRefresh() {
      this.$refs.udb.loadData({
        clear: true,
		
      }, () => {
        uni.stopPullDownRefresh()
      })
    },
    onReachBottom() {
      this.$refs.udb.loadMore()
    },
    methods: {
      handleItemClick(id) {//跳转详情页面
        uni.navigateTo({
          url: "/pages/detail/detail?id="+id
        })
      },
     async passtheaudit(item){//审核按钮
	
	
		uni.showLoading({
			title:"提交中..."
		})
		let res=await db.collection("qianhuan-news-articles").doc(item._id).update({
			article_status:1
		}).then(res=>{
			
			uni.hideLoading()
			uni.showToast({
				title:"提交成功",
				icon:'success'
			})
			this.$refs.udb.refresh()
			// this.$refs.udb.loadData({
			//   clear: true,
					
			// })
		})
	 },
    }
  }
</script>

<style lang="scss" scoped>
	.unicard{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.ubutton{
			margin-right: 20px;
		}
	}
</style>

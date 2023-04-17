<template>
	<view>
		<view class="commentFrame">
			<uni-easyinput ref="uipt" :styles="styles" @confirm="goComment" suffixIcon="paperplane" v-model="replyContent"
				:placeholder="placeholder" @iconClick="goComment">
			</uni-easyinput>
		</view>
	</view>
</template>

<script>
	import {getProvince} from "@/utils/tools.js"
	const updateinc = uniCloud.importObject("utilsObj", {
		customUI: true
	})
	const db=uniCloud.database()
	export default {
		props:["comments","placeholder"],
		name: "comment-frame",
		data() {
			return {
				styles:{//自定义搜索框样式
					borderColor:"#7a50bb",
					disableColor:"#7a50bb",
				},
				replyContent:"",  ///用户输入的数据
				
			};
		},
		methods:{
			
			
			async goComment(){//点击按钮发送
			if(!this.replyContent) return uni.showToast({
				title:"内容不能为空",
				icon:"none"
			})
			
			let Province=await getProvince()
				db.collection("qianhuan-news-comments").add({
					"comment_content":this.replyContent, //评论内容
					"province":Province,//城市
					...this.comments   //传过来的文章ID和回复分级
				}).then(res=>{ 
					this.$emit("usercommie",{
						comment_content:this.replyContent,
						province:Province,
					})
					this.replyContent=""
					uni.showToast({
						title:"评论成功",
					})
					
					
					//评论++
					/**
					  * @param {Object} table 	//数据表
					  * @param {Object} attr 	//属性
					  * @param {Object} id		//id
					  * @param {Object} num		//1=自增，-1自减
					  */
					 //增加或减少的云对象
					updateinc.addingOrTaking("qianhuan-news-articles","comment_count",this.comments.article_id,1)
				})
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.commentFrame {
		width: 100%;
		background: #fff;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
	}
</style>

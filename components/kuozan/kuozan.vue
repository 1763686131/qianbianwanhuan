<template>
	<view>
		<view class="close">
			<uni-card @click="userTexthistory" v-if="updete">
				<text>用户删除记录</text>
			</uni-card>
			<uni-card v-if="updete" @click="userTextcheck">
				<text>用户发表审核</text>
			</uni-card>
			<uni-card @click="imageslod">
				<text>浏览图片记录</text>
			</uni-card>
			<uni-card @click="imagesclick">
				<text>清除图片记录</text>
			</uni-card>
			<uni-card>
				<text>浏览文章记录</text>
			</uni-card>
			<uni-card v-if="updete">
				<text>用户反馈记录</text>
			</uni-card>
			<uni-card>
				<text>历史版本</text>
			</uni-card>
			<uni-card v-if="updete">
				<text>权限配置</text>
			</uni-card>
			<uni-card  v-if="updete">
				<text>修改主题颜色</text>
			</uni-card>
		</view>
					
	</view>
</template>

<script>
	export default {
		props:["updete"],//权限
		name:"kuozan",
		data() {
			return {
				
			};
		},
		
	
			methods:{
			//审核文章
			userTextcheck(){
				uni.navigateTo({
					url:"/pages/userTexthistory/usertextcheck"
				})
			},
			
			//图片生成记录
			imageslod() {
				uni.navigateTo({
					url: '/pages/self/imglod/imglod'
				})
			},
			//清除图片记录
			imagesclick() {
				uni.showModal({
					title: "确定清除？",
					content: '一旦清除无法找回',
					success: (res) => {
						if (res.confirm) {
							uni.removeStorage({
									key: 'images',
							}) 
						} else if (res.cancel) {
							
						}
					},
				})
			},
			//用户删除记录
			userTexthistory(){
				uni.navigateTo({
					url:"/pages/userTexthistory/userTexthistory"
				})
			},
		},
		
	}
</script>

<style lang="scss">
	.close {
		width: 360rpx;
	}
	
</style>
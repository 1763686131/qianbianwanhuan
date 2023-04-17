<template>
	<view class="content">
		<view class="all">
		


			
			<view class="belleimage">
				
				<view class="item" @click="itemone(1)">二次元</view>
				<view class="item"  @click="itemone(2)">黑丝</view>
				<view class="item" @click="itemone(3)">美女</view>
				<view class="item"></view>
				<view class="item"></view>
			</view>
			
		</view>
		
		<bubbels></bubbels>
	</view>
</template>

<script>
	export default {

		data() {
			return {
			
				title: 'Hello',
				
				html: "hello"
			}
		},
		onLoad() {

		},
		methods: {
			itemone(id){
				if(id==1){
					uni.navigateTo({
						url:'/pages/list/imglist/imglist'
					})
				}
				if(id==2){
					uni.navigateTo({
						url:'/pages/list/imglistheisi/imglistheisi'
					})
				}
				
				if(id==3){
					uni.navigateTo({
						url:'/pages/list/belle/belle'
					})
				}
				
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		position: absolute;
	
		width: 100%;
		
		background: linear-gradient(#7a50bb, #9849bb);
		.all{
			display: flex;
			
			
			.belleimage{
					z-index: 4;
				position: absolute;
				overflow: hidden;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				
				
				.item {
					position: absolute;
					
					background: radial-gradient(circle at 75% 30%, #FFF 10rpx,#ff21c0 8%);
					border-radius: 50%;
					box-shadow: inset 0 0 40rpx #fff,
						inset 20rpx 0 92rpx #eaf5fc,
						inset 160rpx 0 120rpx #efcde6,
						inset -40rpx -120rpx 200rpx #f9f6de,
						inset 0 100rpx 280rpx #f9f6de,
						0 0 180rpx #fff;
					&:nth-child(1){
						color: #7a50bb;
						font-size: 45rpx;
						font-weight: 700;
						text-align: center;
						line-height: 200rpx;
						width: 200rpx;
						height: 200rpx;
						top: 100rpx;
						left: 5%;
						animation: flying 10s infinite ease-in;
					}
					&:nth-child(2){
						color: #7a50bb;
						font-weight: 700;
						text-align: center;
						line-height: 150rpx;
						width: 150rpx;
						height: 150rpx;
						top: 400rpx;
						left: 20%;
						animation: flying1 10s infinite ease-in;
					}
					&:nth-child(3){
						color: #7a50bb;
						font-size: 45rpx;
						font-weight: 700;
						text-align: center;
						line-height: 180rpx;
						width: 180rpx;
						height: 180rpx;
						top: 200rpx;
						left: 60%;
						animation: flying2 10s infinite ease-in;
					}
					
					@keyframes flying {
						0%{
							
							transform: translateX(0);
						}
						60%{
							transform: translateX(60rpx);
						}
						100%{
							
							transform: translateX(0);
						}
					}
					@keyframes flying1 {
						0%{
							
							transform: translateX(0);
						}
						50%{
							transform: translateX(60rpx);
						}
						100%{
							
							transform: translateX(0);
						}
					}
					@keyframes flying2 {
						0%{
							
							transform: translateX(0);
						}
						30%{
							transform: translateX(90rpx);
						}
						100%{
							
							transform: translateX(0);
						}
					}
					
				}
				
				
			}
		
			
				
				
				.menv{
					border-radius: 5%;
					height: 600rpx;
				}
			
		
		}
		
	}
</style>
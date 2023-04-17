<template>
	<view class="div">
		<view class="bubbels">
			<view class="bubbel"></view>
			<view class="bubbel"></view>
			<view class="bubbel"></view>
			<view class="bubbel"></view>
			<view class="bubbel"></view>
			<view class="bubbel"></view>
			<view class="bubbel"></view>
			<view class="bubbel"></view>
			<view class="bubbel"></view>
			<view class="bubbel"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"bubbels",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.div{
		width: 100%;
		height: 1500rpx;
		// background: linear-gradient(#7a50bb, #9849bb);
		
		.bubbels{
			
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 3;
			overflow: hidden;
			top: 0;
			left: 0;
			.bubbel{
				position: fixed;
				bottom:-500rpx;
				background: radial-gradient(circle at 75% 30%, #FFF 10rpx,#ff21c0 8%);
				border-radius: 50%;
				box-shadow: inset 0 0 40rpx #fff,
					inset 20rpx 0 92rpx #eaf5fc,
					inset 160rpx 0 120rpx #efcde6,
					inset -40rpx -120rpx 200rpx #f9f6de,
					inset 0 100rpx 280rpx #f9f6de,
					0 0 180rpx #fff;
				// opacity: 0.5;
				animation: flying 10s infinite ease-in;
				
				&:nth-child(1){
					width: 80rpx;
					height: 80rpx;
					left: 10%;
					animation-duration: 8s;
				}
				&:nth-child(2){
					width: 40rpx;
					height: 40rpx;
					left: 20%;
					animation-duration: 5s;
					animation-delay: 1s;
				}
				&:nth-child(3){
					width: 100rpx;
					height: 100rpx;
					left: 35%;
					animation-duration: 10s;
					animation-delay: 2s;
				}
				&:nth-child(4){
					width: 160rpx;
					height: 160rpx;
					left: 50%;
					animation-duration: 7s;
					animation-delay: 0s;
				}
				&:nth-child(5){
					width: 70rpx;
					height: 70rpx;
					left: 55%;
					animation-duration: 6s;
					animation-delay: 1s;
				}
				&:nth-child(6){
					width: 90rpx;
					height: 90rpx;
					left: 65%;
					animation-duration: 8s;
					animation-delay: 3s;
				}
				&:nth-child(7){
					width: 50rpx;
					height: 50rpx;
					left: 75%;
					animation-duration: 7s;
					animation-delay: 2s;
				}
				&:nth-child(8){
					width: 160rpx;
					height: 160rpx;
					left: 80%;
					animation-duration: 6s;
					animation-delay: 1s;
				}
				&:nth-child(9){
					width: 30rpx;
					height: 30rpx;
					left: 70%;
					animation-duration: 9s;
					animation-delay: 0s;
				}
				&:nth-child(10){
					width: 100rpx;
					height: 100rpx;
					left: 85%;
					animation-duration: 5s;
					animation-delay: 3s;
				}
				
			}
			
			
			
			@keyframes flying {
				0%{
					bottom: -200rpx;
					transform: translateX(0);
				}
				50%{
					transform: translateX(200rpx);
				}
				100%{
					bottom: 2000rpx;
					transform: translateX(-400rpx);
				}
			}
		}
	}
</style>
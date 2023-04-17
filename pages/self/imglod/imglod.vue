<template>
	<view>
		<view class="imgarr">
			<image :src="item.url" mode="aspectFill" @click="previewImage(index)" v-for="(item,index) in imagesal.data" :key="item.id">
			</image>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imagesal: []
			};
		},
		computed: {

		},
		methods: {
			previewImage(item) {
					let newarr=this.imagesal.data.map(item=>{
					return item.url
				})
				
				uni.previewImage({
					current: item,
					urls: newarr,
					longPressActions: {

					},
					loop: true,
					
				})
			},
			async imagesall() {
				let ares = await uni.getStorage({
					key: 'images',
				})
				this.imagesal = ares
			},
		},

		mounted() {
			this.imagesall()

		},
	}
</script>

<style lang="less">
	.imgarr {
		padding: 20rpx;

		image {
			box-sizing: border-box;
			padding: 10rpx;
			width: 50%;
			height: 400rpx;
		}
	}
</style>

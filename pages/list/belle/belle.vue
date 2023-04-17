<template>
	<view>
		<image :src="images" mode="widthFix" @click="imageifo"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				images:null,
				Imagesifo:[],
			};
		},
		mounted(){
			this.getimages()
			this.imageifo()
			uni.setNavigationBarTitle({
				title:"点击切换下一张"
			})
			
		},
		computed:{
			
		},
		methods:{
			async getimages(){
				let res=await uni.getStorage({
					key:'images'
				})
				if(!this.Imagesifo.id){
					this.Imagesifo=res.data
				}else{
					this.Imagesifo=this.Imagesifo
				}

			},
			async imageifo(){
				let res= await uni.request({
					url:"https://v2.api-m.com/api/meinvpic",
					
					method:'GET',
					// data:{
					// 	type:'wap',
					// }
				})
				if(res.statusCode==200) {
					this.images=res.data.data
					
					this.Imagesifo.unshift({
						id:this.Imagesifo.length,
						url:res.data.data
					})
					uni.setStorage({
						key:'images',
						data:this.Imagesifo,
					}) 
				}
				
			}
		
		}
	}
</script>

<style lang="less">
	image{
		width: 100%;
		
	}
</style>

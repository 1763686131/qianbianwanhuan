<template>
	<view class="edit">
		<view class="title">

			<input v-model="artobj.title" type="text" placeholder="请输入完整的标题" placeholder-class="placeholderClass">
		</view>
		<view class="">
			<text>请选择帖子类别</text>
		</view>
		<view>
			<uni-data-select  :localdata="range" @change="change"></uni-data-select>
		</view>
		<view class="content">
			<jinEdit class="myEdit" placeholder="请输入内容" height="" @editOk="editOk"></jinEdit>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	import jinEdit from '../../components/jin-edit/jin-edit.vue'
	import {
		getImgSrc,
		getProvince
	} from "@/utils/tools.js"
	export default {
		name: "edit",
		components: {
			jinEdit
		},
		data() {
			return {
				show: false,
				range: [
				        { value: 0, text: "日常" },
				        { value: 1, text: "游戏" },
				        { value: 2, text: "美图" },
				      ],
				artobj: { //文本收集
					title: "",
					category:-1, //类别
					content: "",
					dispalytext: "",
					picurls: "",
					province: "",
				}

			};
		},
		onLoad() {
			getProvince().then(res => {
				this.artobj.province = res
			})
		},
		methods: {
			change(e) {
			     this.artobj.category=e
				  
			    },




			//提交按钮
			editOk(res) {
				if(this.artobj.category==-1) {
					uni.showToast({
						title: '请选择类别',
						icon:'none'
					});
					return
				}
				this.artobj.content = res.html
				this.artobj.dispalytext = res.text.slice(0, 50) //截取字符串的长度
				this.artobj.picurls = getImgSrc(res.html)
				if (res.isPublic) {
					uni.showLoading({
						title: "发布中..."
					})
					this.adddata()
				} else {
					uni.showToast({
						title: '暂未开放，期待后续更新'
					});
				}
			},

			//提交数据到服务器
			adddata() {
				db.collection("qianhuan-news-articles").add({
					...this.artobj
				}).then(res => {
					uni.showToast({
						title: "发布成功,系统审核中.."
					})
					setTimeout(() => {
						uni.reLaunch({
							url: "/pages/forum/forum"
						})
					}, 800)
				}).catch(res => {
					console.log(res);
					uni.hideLoading()
					uni.showToast({
						title: "发布失败，标题和内容必填",
						icon: "error"
					})

				})
			}
		},


	}
</script>

<style lang="scss">
	/deep/ .ql-blank::before {
		font-style: normal;
		color: #e0e0e0;
	}


	.edit {
		padding: 30rpx;

		.title {
			input {
				height: 120rpx;
				font-size: 46rpx;
				border-bottom: 1px solid #e4e4e4;
				margin-bottom: 30rpx;
				color: #000;
			}

			.placeholderClass {
				color: #e0e0e0;
			}
		}

		.content {
			/deep/.tool-view {
				width: 97%;

				padding-right: 20rpx;
			}

			.myEdit {
				height: calc(100vh - 400rpx);
				margin-bottom: 10rpx;


			}
		}

		.tools {
			width: 100%;
			height: 80rpx;
			background: #fff;
			border-top: 1rpx solid #f4f4f4;
			position: fixed;
			left: 0;
			bottom: 0;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.iconfont {
				font-size: 36rpx;
				color: #333;

				&.active {
					color: #0199FE
				}
			}
		}
	}
</style>
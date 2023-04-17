import {
		store,
	} from '@/uni_modules/uni-id-pages/common/store.js'
const db = uniCloud.database()
const updateinc = uniCloud.importObject("utilsObj",{
		customUI:true
	})

//传入文章id  和文章
export const islick=async(detailid)=>{
	if(!store.hasLogin){
		uni.showModal({
			title:"登录后才能操作",
			success:res=>{
				if(res.confirm){
					uni.navigateTo({
						url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"
					})
				}
				
			}
		})
		return
	}
	
			
	// let nowtime=Date.now()
	// if(nowtime - detaillist.nowtime < 3000 ){
	// 	detaillist.nowtime=nowtime
	// 	uni.showToast({
	// 		title:"操作频繁",
	// 		icon:"none"
	// 	})
	// 	return
	// }
	// detaillist.nowtime=nowtime
	
	// detaillist.userlike ? detaillist.like_count-- : detaillist.like_count++
	// detaillist.userlike = !detaillist.userlike

	
		//点赞按钮给数据拿数据
		let cunt = await db.collection("qianhuan_news_like").where(
			`article_id=="${detailid}" && user_id==$cloudEnv_uid`).count()
		if (cunt.result.total) {
			db.collection("qianhuan_news_like").where(
			`article_id=="${detailid}" && user_id==$cloudEnv_uid`).remove()
			updateinc.addingOrTaking("qianhuan-news-articles", "like_count", detailid, -1)
		} else {
			db.collection("qianhuan_news_like").add({
				article_id: detailid,
				
			})
			updateinc.addingOrTaking("qianhuan-news-articles", "like_count", detailid, 1)
		}

}
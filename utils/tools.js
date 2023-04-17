//获取富文本内的图片url地址
export function getImgSrc(richtext,num=3) {
	let imgList = [];
	richtext.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, (match, capture) => {
		  imgList.push(capture);
	});
	imgList=imgList.slice(0,num)
	return imgList;
}

//向外导出省份
export function getProvince(){
	return new Promise((resolve,reject)=>{
		let historyProvince=uni.getStorageSync("historyProvince");
		if(historyProvince){			
			if((Date.now() - historyProvince.time) > 1000*60*60){				
				getIp().then(res=>{
					resolve(res)
				}).catch(err=>{
					reject(err)
				})	
			}else{				
				resolve(historyProvince.province);
			}
		}else{			
			getIp().then(res=>{
				resolve(res)
			}).catch(err=>{
				reject(err)
			})		
		}	
	})
}

//获取所在省市
function getIp(){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"https://restapi.amap.com/v3/ip?key=03b09423205ecb2da00369ff59a22eaa",
			success:res=>{				
				let str=""				
				typeof(res.data.province) == "string" ? str=res.data.province :str="火星"
				resolve(str)
				let obj={
					province:str,
					time:Date.now()
				}
				uni.setStorageSync("historyProvince",obj);				
			},
			fail:err=>{
				reject(err)
			}
		})
	})	
}



//获取昵称
export function giveName(item){
	return  item.user_id[0].nickname ||  item.user_id[0].username || item.user_id[0].mobile || "请设置昵称"	
}

//获取默认头像
export function giveAvatar(item){	
	return item.user_id[0]?.avatar_file?.url ?? '../../static/logo.png'
}


const db=uniCloud.database();	
const utilsObj=uniCloud.importObject("utilsObj",{
	customUI: true
});



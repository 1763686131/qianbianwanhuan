// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const db=uniCloud.database()
const dbcmd=db.command
module.exports = {
	_before: function () { // 通用预处理器

	},
	
	 /**
	  * @param {Object} table 	//数据表
	  * @param {Object} attr 	//属性
	  * @param {Object} id		//id
	  * @param {Object} num		//1=自增，-1自减
	  */
	 //增加或减少的云对象
	async addingOrTaking(table,attr,id,num){
		let obj={}
		obj[attr]=dbcmd.inc(num)   //转换
		return await db.collection(table).doc(id).update(obj)
	}
}

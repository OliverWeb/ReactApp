/*
* 操作数据库 ,模型概念,mongodb
*
*实现mongoose库
* */
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/imooc-chat';
mongoose.connect(DB_URL);

/*定义一个用户的模型组
* 对对字段进行定义
* */
const models = {
	user: {
		'user': {'type': String, require: true},
		'pwd': {'type': String, require: true},
		'type': {'type': String, require: true},
		//头像
		avatar: {'type': String},
		/*个人简介和图像简介*/
		'desc': {'type': String},
		//职位名
		'title': {'type': String},
		//如果boss
		'company': {'type': String},
		'money': {'type': String}
	},
	chat: {}
};
/*
* 对model以key名字进行的注册*/
for (let m in models) {
	mongoose.model(m, new mongoose.Schema(models[m]));
}
/*用mongoose.model 将模块名读取出来*/
module.exports = {
	getModel: function (name) {
		return mongoose.model(name);
	}
};
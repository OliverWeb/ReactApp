/*
*1.express传入中间件,把中间件抽离一个单独文件,和use相关的进行拆分  保持入口文件的精简
*2.利用express.Router进行挂载
*3.中间件
* */
const express = require('express');
const Router = express.Router();
const utils = require('utility');
const model = require('./model');
const User = model.getModel('user');
const _fileter={'pwd':0,'_v':0};
Router.get('/list', function (req, res) {
	// User.remove({},function (err,doc) {});
	User.find({}, function (err, doc) {
		return res.json(doc)
	});
});
Router.post('/login', function (req, res) {
	const {user, pwd} = req.body;
	User.findOne({user, pwd: md5Pwd(pwd)},_fileter, function (err, doc) {
		if (!doc) {
			return res.json({code: 1, msg: '用户名或密码错误'});
		}
		//验证成功后进行设置cookie
		res.cookie('userid', doc._id);
		return res.json({code: 0, data: doc});
	})
});
/*注册用post*/
Router.post('/register', function (req, res) {
	console.log(req.body);
	const {user, pwd, type} = req.body;
	User.findOne({user: user}, function (err, doc) {
		if (doc) {
			return res.json({code: 1, msg: "用户名重复"});
		}
		const userModal=new User({user,type,pwd:md5Pwd(pwd)});
		userModal.save(function(e,d){
			if(e){
				return res.json({code:1,msg:'后端出错了'});
			}
			const {user,type,_id}=d;
			res.cookie('userid',_id);
			return res.json({code:0,data:{user,type,_id}});
		});
		/*User.create({user, pwd: md5Pwd(pwd), type}, function (e, d) {
			if (e) {
				return res.json({code: 1, msg: '后端出错了'});
			}
			return res.json({code: 0});
		});*/
	});
});
/*
*1.获取用户的信息接口
*
*
* */
Router.get('/info', function (req, res) {
	//读取的时候的在request
	const {userid} = req.cookies;
	//对cookie进行校验
	User.findOne({_id: userid},_fileter, function (err, doc) {
		if (err) {
			return res.json({code: 1, msg: '后端出错了'});
		}
		if (doc) {
			return res.json({code: 0, data: doc});
		}
	});


});

/*加密在加密*/
function md5Pwd(pwd) {
	const salt = 'welcome_come_china';
	return utils.md5(utils.md5(pwd + salt));
}
//暴露和use相关的接口
module.exports = Router;
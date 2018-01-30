/*
*server.js入口文件
* 进设置的路由的的前缀,子路由是有的引入文件user.js的userRouter进行定义的
*
*1.express传入中间件,把中间件抽离一个单独文件
* 进行拆分  保持入口文件的精简
* 2.app.use就是开启一个中间件
* */
const express = require('express');
/*中间件,处理post请求
* cookie
* 2.这里引入两个中间件进行处理body-parser, cookie-parser
*
* */
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const model = require('./model');
const Chat = model.getModel('chat');
/**
 * 双向数据进行传递数据
 * socket.io和http进行配合
 *
 * **/
const app = express();
const server = require('http').Server(app);
/*
* 仅仅是是为了的socket.io监听端口的这里的socket.io就可以
* */
const io = require('socket.io')(server);
/*
*1:这里的io属于全局请求,下面的socket 属于这一次的请求
*2:io.on:这里是监听某个事件,(1):connection进行确认是否进行了连接
*这里socket就是当前connection连接的socket
* 这里的io是全局的连接
* */
io.on('connection', function (socket) {
	//这里监听前端socket.emit('sendmsg',funciton(){})触发发送的事件
	socket.on('sendmsg', function (data) {
		console.log(data);
		const {from, to, msg} = data;
		const chatid = [from, to].sort().join('_');
		Chat.create({chatid, from, to, content: msg}, function (err, doc) {
			/*io和socket的区别,一个是全局事件,一个是局部事件,将这次事件广播到全局,每个人都是接受的状态*/
			io.emit('recvmsg', Object.assign({}, doc._doc));
		});
	});
});
//将暴露接口返回数据进行引入
const userRouter = require('./user');

/*
*解析cookie中的json
*解析post过来的json
* */
app.use(cookieParser());
app.use(bodyParser.json());

/*
* 进app.user行开启一个中间件
* 如果中间件是路由的话,输入一个前缀,访问路径的前缀,访问接口信息的时候加入use/info
* 这里是使用使用路由对象进行挂载 Router.gert  的返回的对象的,
* 如果中间件是的路由的话,这里要加上路由前缀
*
* 这里的子路由是由userRouter进行定义的
* */
app.use('/user', userRouter);

server.listen(9093, function () {
	console.log(`端口号是:9093`);
});






















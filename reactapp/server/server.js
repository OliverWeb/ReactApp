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
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

//将暴露接口返回数据进行引入
const userRouter=require('./user');
const app=express();
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
app.use('/user',userRouter);

app.listen(9093, function () {
	console.log(`端口号是:9093`);
});






















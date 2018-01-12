/*
*1.express传入中间件,把中间件抽离一个单独文件
* 进行拆分  保持入口文件的精简
* 2.app.use就是开启一个中间件
* */
const express = require('express');
/*中间件*/
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
//将暴露接口返回数据进行引入
const userRouter=require('./user');
const app=express();
/*解析post的json*/
app.use(cookieParser());
app.use(bodyParser.json());

//进行开启一个中间件,如果中间件是路由的话,输入一个前缀,访问路径的前缀,访问接口信息的时候加入use/info
app.use('/user',userRouter);

app.listen(9093, function () {
	console.log(`端口号是:9093`);
});






















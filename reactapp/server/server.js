const express = require('express');

/*中间件*/
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const userRouter=require('./user');
const app=express();
/*解析post的json*/
app.use(cookieParser());
app.use(bodyParser.json());

//进行开启一个中间件
app.use('/user',userRouter);
app.listen(9093, function () {
	console.log(`端口号是:9093`);
});

/*
*express传入中间件,抽离一个单独文件
* todo 进行拆分  保持入口文件的精简*/




















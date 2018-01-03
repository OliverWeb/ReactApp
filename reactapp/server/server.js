const express = require('express');
const userRouter=require('./user');
const app=express();
//进行开启一个中间件
app.use('/user',userRouter);
app.listen(9093, function () {
	console.log(`端口号是:9093`);
});

/*
*express传入中间件,抽离一个单独文件
* todo 进行拆分  保持入口文件的精简*/




















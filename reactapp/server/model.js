/*
* 操作数据库 ,mongodb
* */
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL);
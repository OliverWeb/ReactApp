const express = require('express');
const Router = express.Router();
Router.get('/info', function (req, res) {
	//对cookie进行校验
	return res.json({"code": 1})
});
module.exports = Router;
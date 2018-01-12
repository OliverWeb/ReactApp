/*
* 1.拦截请求,进行布局的loading,
*
* */

import axios from 'axios'
import {Toast} from 'antd-mobile'
//拦截请求的状态,
axios.interceptors.request.use(function (config) {
	Toast.loading('加载中', 0);
	return config
});


/*拦截响应状态*/
axios.interceptors.response.use(function (config) {
	Toast.hide();
	return config
});
/*
* action与reducer
* 用户操作
* 使用redux进行处理的相关的action 和reducer
* 利用action.type进行判断
  * */
import axios from 'axios';
import {getRedirectPath} from '../util'
const AUTH_SUCCESS='AUTH_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
/*这里只做数据*/
const LOAD_DATA='LOAD_DATA';
/*
* 用户的处理状态
* isAuth进行判断是否进行登录
*
* redirectTo,用户跳转路径
* */
const initState = {
	redirectTo:'',
	msg: '',
	type: ''
};
//通过reducer修改状态 监听下面的login register中的action

/*action就是返回的对象*/
export function user(state = initState, action) {
	console.log(action.payload);
	switch (action.type) {
		case AUTH_SUCCESS:
			return {...state,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload};
		case LOAD_DATA:
			return {...state,...action.payload};
		case ERROR_MSG:
			return {...state,isAuth:false,msg:action.msg};
		default:
			return state
	}
}

/*
*负载变量进行书写
* payload:load进行书写
* */
function authSuccess(obj) {
	/*属性扩展符进行过滤掉,去掉字段*/
	const {pwd,...data}=obj;
	return {type:AUTH_SUCCESS,payload:data}
}

export function loadData(userinfo) {
	return {type:LOAD_DATA,payload:userinfo}
}
/*登录*/
export function login({user,pwd}){
	if(!user||!pwd){
		return errorMsg('用户名密码必须输入');
	}
	return dispatch=>{
		axios.post('/user/login',{user,pwd}).then(res=>{
			if(res.status===200&&res.data.code===0){
				dispatch(authSuccess(res.data.data))
			}else{
				dispatch(errorMsg((res.data.msg)));
			}
		})
	}
}
function errorMsg(msg) {
	return {msg: msg, type: ERROR_MSG}
}
/*
*
* 进行异步请求的时候利用高阶组件进行的dispatch进行处理
* */
export function update(data){
	return dispatch=>{
		axios.post('/user/update',data)
			.then(res=>{
				console.log(res);
				if(res.status===200&&res.data.code===0){
					console.log(res.data.data);
					dispatch(authSuccess(res.data.data));
				}else{
					dispatch(errorMsg(res.data.msg));
				}
			})
	}
}
/*
* 用户操作的行为
* 利用{}对传过来的数组进行解耦的操作,
* 这里action返回的对象的,reduce直接通过action的可以获取的到
* */
export function register({user, pwd, repeatpwd, type}) {
	if (!user || !pwd || !type) {
		return errorMsg('用户名密码必须输入正确');
	}
	if (pwd !== repeatpwd) {
		return errorMsg('密码和确认密码不同');
	}
	/*上面都是同步的写法, 这里请求数据使用异步的写法
	* redux中thunk 支持返回函数
	* applyMiddleware(thunk);进行开启中间件
	* */
	return dispatch => {
		axios.post('/user/register', {user, pwd, type}).then(res => {
			if (res.status == 200 && res.data.code === 0) {
				dispatch(authSuccess({user, pwd, type}))
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}
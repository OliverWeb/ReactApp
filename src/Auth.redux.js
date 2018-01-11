/*
* 对数据的进行处理的都将利用redux进行处理
* 与auth.js的@connecta 装饰器中的数据是的息息相关的,
* connect中的数据以及用到的action
* createStore(reducer) reducer的操作的函数的---逻辑处理
* 以及dispatch(action)
*用于存放数据供其他的木偶组件进行调用
*
* */

import axios from  'axios'
/*
* 定义变量
*
* */
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER_DATA='USER_DATA';

//reducer
const initState={
	isAuth:false,
	user:'李云龙',
	age:20
};

/*
* 这里是定义reducer操作的函数 createStore(reducer)
*第一个参数:用到的数据的
* 第二个参数是dispatch(action) 中的操作的库
* switch 针对多种情况进行处理
*
* */
export function auth(state = initState, action) {
	console.log(state,action);
	switch (action.type) {
		case LOGIN:
			return {...state, isAuth: true};
		case LOGOUT:
			return {...state, isAuth: false};
		case USER_DATA:
			return {...state, user:action.payload.user,age:action.payload.age};
		default:
			return state
	}
}

//action  creator  dispatch(action)
export function getUserData(){
	return dispatch=>{
		axios.get('/data')
			.then(res=>{
				if(res.status==200){
					dispatch(userDate(res.data));
				}
			})
	}
}
export function userDate(data) {
	return {type:USER_DATA,payload:data}
}
export function login() {
	return {type: LOGIN}
}

export function logout() {
	return {type: LOGOUT}
}

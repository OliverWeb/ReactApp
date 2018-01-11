/*
*index.js 入口文件,利用BrowserRouter 进行包裹整个App,
*Switch  包裹Route进行 处理的路由跳转
*
*
* index.js进行路由跳转的处理,
* Provider   这里是进行store库处理
* BrowserRouter,Switch Route,Redirect
*
* 处理数据进行跳转
*
*
* */

import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'    //进行连接react和redux,subscribe弃用
/*
* react-router-dom
*Redirect  直接路由的跳转
* Switch
* */
import {
	BrowserRouter,
	Route,
	Redirect,
	Switch
} from 'react-router-dom'

import thunk from 'redux-thunk'
/*
* createStore:是新建库
* applyMiddleware进行开启中间件thunk
*使用compose是为了结合thunk和window.devToolsExtension,利用插件devToolsExtension进行,进行实时查看state
* 这里compose是一个组合函数
*
* */
import {createStore, applyMiddleware, compose} from 'redux'
//利用applyMiddleware进行开启中间件 thunk,进行处理异步


import reducers from './reducers'
import Dashboard from './Dashboard'
import Auth from './Auth'
import './config'
import 'antd-mobile/dist/antd-mobile.css';
/*对插件进行监控*/
/*
* 这里createStore(reducer);   是创建的操作函数的
* 如果是多个的情况的可以创建reducer.js 利用的combineReducers将多个创建的reducer进行合并
*
*
* */
const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));
/* todo 入口文件   包裹整个app  */
ReactDom.render(
	(<Provider store={store}> //这里仅仅传store即可,将react和redux进行连接
		<BrowserRouter>
			{/*switch只渲染第一个命中的Route,不去加载第二组组件*/}
			<Switch>
				{/*用户登录页面*/}
				<Route path='/login' exact component={Auth}/>
				{/*用户的面板*/}
				<Route path='/dashboard' component={Dashboard}/>
				{/*redirect 如果上面都没有命中的话,默认跳转dashboard*/}
				{/*访问其他页面统一跳转dashboard*/}
				<Redirect to='/dashboard'/>
			</Switch>
		</BrowserRouter>
	</Provider>)
	, document.getElementById('root')
);

import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'    //进行连接react和redux,subscribe弃用
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

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
const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f=>f
));

/* todo 入口文件   包裹整个app  */
ReactDom.render(
	(<Provider store={store}>     //这里仅仅传store即可,将react和redux进行连接
		<BrowserRouter>
			<Switch>
				<Route  path='/login' exact component={Auth} />
					<Route  path='/dashboard'  component={Dashboard}/>
				 {/*redirect 如果上面都没有命中的话,默认跳转dashboard*/}
					<Redirect to='/dashboard'/>
			</Switch>
		</BrowserRouter>
	</Provider>)
	, document.getElementById('root')
);

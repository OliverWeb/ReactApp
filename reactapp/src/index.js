import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

/*引入文件start*/
import Login from './container/login/login'
import Register from './container/register/register'
import Authroute from "./component/authroute/authroute";
/*引入文件end*/

import reducers from './reducers'
import './config'
import './index.css'


/*对插件进行监控*/
const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));
/*无状态的组件*/
function Boos() {
	return <h2>Boss页面</h2>
}
/* todo 入口文件  包裹整个app  */
ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			{/*组件容器login,register*/}
			<div>
				{/*检测路由,获取用户信息,并做简单的跳转*/}
				<Authroute></Authroute>
				<Route path='/boss' component={Boos}></Route>
				<Route path='/login' component={Login}/>
				<Route path='/register' component={Register}/>
			</div>
		</BrowserRouter>
	</Provider>)
	, document.getElementById('root')
);

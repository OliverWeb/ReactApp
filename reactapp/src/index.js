/*
* 1.index.js入口文件利用的Provider传store进行对store中的数据进行处理,利用BrowserRouter包裹跳转路由Route进行处理路由的跳转
*2.将reducer.js中的combineReducers({reducer})合并后暴露给index.js----给予createStore(reducer进行使用);
*3.使用compose是为了结合thunk和window.devToolsExtension,利用插件devToolsExtension进行,进行实时查看state这里compose是一个组合函数
*4.Route中的防止path="/"路径进行匹配多个的情况,添加属性exact进行严格匹配,
*
*
* */
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
import BoosInfo from './container/boosinfo/boosinfo';
import GeniusInfo from './container/geniusinfo/geniusinfo';
import Dashboard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'
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
/*function Boos() {
	return <h2>Boss页面</h2>
}
function Dashboard(){
return <h2>Dashboard</h2>
}*/
/*
*入口文件  包裹整个app
* boos genuis me msg 4个页面
*1.Route 如果没有写path,上面没有命中的话的就行的跳转到当前页面
*switch:仅仅条状第一个命中的
* */
ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			{/*组件容器login,register*/}
			<div>
				{/*检测路由,获取用户信息,并做简单的跳转*/}
				<Authroute/>
				<Switch>
					<Route path='/boosinfo' component={BoosInfo}/>
					<Route path='/geniusinfo' component={GeniusInfo}/>
					<Route path='/login' component={Login}/>
					<Route path='/register' component={Register}/>
					{/*
					 *这里添加参数,是确定和谁进行聊天
					 * 跳转,进行参数传递:this.props.history.push(`/chat/${v._id}`);
					 * 获取参数:const userid = this.props.match.params.user;
					 * */}
					<Route path='/chat/:user' component={Chat}/>
					<Route component={Dashboard}/>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>)
	, document.getElementById('root')
);

/*
* 用户面板的页面
* 木偶组件,用于接受的index.js数据进行展现
* connect用在木偶的组件进行连接xxx.redux.js 中的数据的
*
* */

import React from 'react'
import {Route, Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import App from './App'
import {logout} from './Auth.redux'

/*
* dispatch(action) ,这里任务分配进行自动检测
*
*
* */
@connect(
	state => state.auth,
	{logout}
)
class Dashboard extends React.Component {
	render() {
		const match = this.props.match;
		/*
		*match.url:实际路径,里面包括传参的变量
		* match.path:是定义的路径的
		* 获取当前的路径*/
		console.log(match);
		/*如果没有登录自动跳转到相应的页面*/
		const redirectTologin = <Redirect to='/login'/>;
		const app = (
			<div>
				<h1>独立团</h1>
				{/*操作事件用到的action 都要当道Auth.redux.js*/}
				{this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
				<ul>
					<li><Link to={`${match.url}/`}>一营</Link></li>
					<li><Link to={`${match.url}/erying`}>二营</Link></li>
					<li><Link to={`${match.url}/qibinglian`}>骑兵连</Link></li>
				</ul>

				<Route path={`${match.url}/`} component={App}/>
				<Route path={`${match.url}/erying`} component={Erying}/>
				<Route path={`${match.url}/qibinglian`} component={Qibinglian}/>
			</div>
		);
		return this.props.isAuth ? app : redirectTologin
	}
}
function Erying() {
	return <h2>二营</h2>
}

function Qibinglian() {
	return <h2>骑兵连</h2>
}

export default Dashboard;
/*
* title:职位名称,
* 2.点击保存按钮走redux进行的处理数据
* 利用@connect将boosinfo,redux.js链接一起
* 使用装饰器connect(reducer,action),使用redux中用户的数据,例如hide
* */
import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'

function Boos() {
	return <h2>Boos页面</h2>
}

function Genius() {
	return <h2>牛人页面</h2>
}

function Msg() {
	return <h2>消息列表</h2>
}

function User() {
	return <h2>个人中心</h2>
}

@connect(
	state => state
)
class Dashboard extends React.Component {
	render() {
		/*当前页面的路径进行处理*/
		const {pathname} = this.props.location;
		const user = this.props.user;
		const navList = [
			{
				path: '/boos',
				text: '牛人',
				icon: 'boos',
				title: '牛人列表',
				component: Boos,
				hide: user.type == 'genius'
			},
			{
				path: '/genius',
				text: 'boos',
				icon: 'job',
				title: 'Boos列表',
				component: Genius,
				hide: user.type == 'boos'
			},
			{
				path: '/msg',
				text: '消息',
				icon: 'msg',
				title: '消息列表',
				component: Msg
			},
			{
				path: '/me',
				text: '我',
				icon: 'user',
				title: '个人中心',
				component: User
			}
		];
		return (
			<div>
				<NavBar mode='dard'>
					{navList.find(v => v.path == pathname).title}
				</NavBar>
				<NavLinkBar data={navList}/>
				<div>96969696</div>
			</div>
		)
	}
}

export default Dashboard


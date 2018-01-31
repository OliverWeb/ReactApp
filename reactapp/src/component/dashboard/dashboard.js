/*
* title:职位名称,
* 2.点击保存按钮走redux进行的处理数据
* 利用@connect将boosinfo,redux.js链接一起
* 使用装饰器connect(reducer,action),使用redux中用户的数据,例如hide
* */
import React from 'react'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import Boos from '../boos/boos'
import Genius from '../genius/genius'
import User from '../user/user'
import Msg from '../msg/msg'
import {getMegList, recvMsg} from '../../redux/chat.redux'

@connect(
	state => state,
	{getMegList, recvMsg}
)
class Dashboard extends React.Component {
	componentDidMount() {
		/*进入dashboard的时候就要获取用户的列表,进行切换的时候重复获取*/
		if (!this.props.chat.chatmsg.length) {
			this.props.getMegList();
			this.props.recvMsg();
		}
	}

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
				<NavBar className='fixed-header' mode='dard'>
					{navList.find(v => v.path == pathname).title}
				</NavBar>
				<div style={{marginTop: 45}}>
					<Switch>
						{navList.map(v => (
							<Route key={v.path} path={v.path} component={v.component}/>
						))}
					</Switch>
				</div>
				<NavLinkBar data={navList}/>
			</div>
		)
	}
}

export default Dashboard


/* todo (用于仅仅是的组件) 获取用户信息,并进行跳转的的一个组件*/
import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
@withRouter
/*
* 不是路由组件,只是是一个操作路由的方法
* */
class Authroute extends React.Component {
	componentDidMount() {
		const publicList=['/login','/register'];
		const pathname=this.props.location.pathname;
		if(publicList.indexOf(pathname)>-1){
			return null
		}
		//	获取用户信息,
		axios.get('/user/info').then(res => {
			if (res.status == 200) {
				if (res.data.code == 0) {
					//有登陆信息
				} else {
					this.props.history.push('/login')
				}
				console.log(res.data);
			}
		})
		//	是否登录
		//	现在url地址  login 不需要进行跳转
		//	用户的type, 身份是boss还牛人
		// 用户信心是否完善 (选择头像, 个人简历)
	}

	render() {
		return <h1>进行的登录的判断</h1>
	}
}

export default Authroute;
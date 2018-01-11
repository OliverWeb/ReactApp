/*
* 主要包括呈现view层,处理一些路由的跳转
*
*
* 用户的登录的页面
* react-redux中connect 用于木偶组件中的
* 利用connect装饰器将Auth.redux.js中的的state和dispatch(action) 传递过来
*
*
* index.js就是所有文件的入口
*
* */
import React from 'react'
/*
* 路由的跳转使用的react-router-dom
* */
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login, getUserData} from './Auth.redux'
// import axios from 'axios'
//装饰器进行监控的login

/*
* 连个reducer,和action操作的函数,获取的通过this.props.进行获取想要的数据
*
* */
@connect(
	state => state.auth,
	{login, getUserData}
)
class Auth extends React.Component {
	/*	constructor(props){
			super(props);
			this.state={
				data:{}
			}
		}*/
	componentDidMount() {
		/*
		* 单独的是axios使用,reducer 通过this.props.获取数据 /setState的使用通过this.state进行获取
		* */
		/*axios.get('/data')
			.then(res=>{
				if(res.status==200){
					this.setState({data:res.data})
				}
				console.log(res)
			})*/
		/*这里进行做异步请求的action,dispatch进行异步处理,axios进行拦截请求*/
		this.props.getUserData();
	}

	render() {
		return (
			<div>
				<h2>我的名字是{this.props.user},年龄{this.props.age}</h2>
				{this.props.isAuth ? <Redirect to='/dashboard'/> : null}
				<p>你还没有权限,需登录才能看到</p>
				{/*这里是的调用action ,自动进行处理reducer处理*/}
				<button onClick={this.props.login}>登录</button>
			</div>
		)
	}
}

export default Auth;
import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login, getUserData} from './Auth.redux'
import axios from 'axios'

//装饰器进行监控的login
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
		/*axios.get('/data')
			.then(res=>{
				if(res.status==200){
					this.setState({data:res.data})
				}
				console.log(res)
			})*/
		this.props.getUserData();
	}

	render() {
		return (
			<div>
				<h2>我的名字是{this.props.user},年龄{this.props.age}</h2>
				{this.props.isAuth ? <Redirect to='/dashboard'/> : null}
				<p>你还没有权限,需登录才能看到</p>
				<button onClick={this.props.login}>登录</button>
			</div>
		)
	}
}

export default Auth;
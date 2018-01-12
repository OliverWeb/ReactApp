/*
* 1.class Login组件export default暴露出去.
* 2.业务组件:只呈现页面的View,利用@connect装饰器进行展现数据,
* 3.@connect装饰器传递reducer,和action,页面内的数据获取统一用this.props
*
* */

import React from 'react'
/*引入Logo组件*/
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(
	state => state.user,
	{login}
)
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			pwd: ''
		};
		/*
		* 1.进行绑定事件constructor
		* 2.这里定义比Onclick中箭头函数的,性能更好一点
		* 3.onClick这里的利用箭头函数的每次都会进行传入一个新的对象,尽量采用在constructor进行bind(this)
		* */
		this.register = this.register.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	/*
		* 1.路由组件:组件和路由直接进行绑定的,
		* 2.注册事件,直接跳转login页面
		* 3.通说this.props.history.push();进行路由的跳转
		* console.log(this.props);
		* route4特有的
		* */
	register() {
		console.log(this.props);
		this.props.history.push('/register')
	}

	handleLogin() {
		this.props.login(this.state);
	}
	/*
	* 提取公共函数的*/
	handleChange(key, val) {
		this.setState({
			[key]: val
		});
	}

	render() {
		return (
			<div>
				{this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
				<Logo/>
				<WingBlank>
					<List>
						{this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
						<InputItem onChange={v => this.handleChange('user', v)}>用户</InputItem>
						<InputItem onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
					</List>
					<WhiteSpace/>
					<Button onClick={this.handleLogin} type="primary">登录</Button>
					<WhiteSpace/>
					<Button onClick={this.register} type="primary">注册</Button>
				</WingBlank>
			</div>
		)
	}
}

export default Login
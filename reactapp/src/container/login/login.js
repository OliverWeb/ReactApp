import React from 'react'
/*引入Logo组件*/
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
class  Login extends React.Component{
	constructor(props) {
		super(props);
		/*
		*进行绑定事件constructor
		* 这里定义比Onclick中箭头函数的,性能更好一点
		* */

		this.register = this.register.bind(this);
	}
	/*
		* 注册事件,直接跳转login页面
		* 路由组件:
		* */
	register(){
		// console.log(this.props);
		/*利用路由进行跳转*/
		this.props.history.push('/register')
	}
	render(){
		return(
			<div>
				<Logo/>
				<h2>登录页</h2>
				<WingBlank>
					<List>
						<InputItem>用户</InputItem>
						<InputItem>密码</InputItem>
					</List>
					<WhiteSpace/>
					<Button type="primary">登录</Button>
					<WhiteSpace/>
					<Button onClick={this.register} type="primary">注册</Button>
				</WingBlank>
				</div>
			)
	}
}
export default  Login
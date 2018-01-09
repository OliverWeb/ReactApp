import React from 'react'
/*引入Logo组件*/
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
	state=>state.user,
	{login}
)
class  Login extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			user:'',
			pwd:''
		};
		/*
		*进行绑定事件constructor
		* 这里定义比Onclick中箭头函数的,性能更好一点
		* */

		this.register = this.register.bind(this);
		this.handleLogin=this.handleLogin.bind(this);
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
	handleLogin(){
		this.props.login(this.state);
	}
	handleChange(key,val){
		this.setState({
			[key]:val
		});
	}
	render(){
		return(
			<div>
				{this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
				<Logo/>
				<WingBlank>
					<List>
						{this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
						<InputItem onChange={v=>this.handleChange('user',v)}>用户</InputItem>
						<InputItem onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
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
export default  Login
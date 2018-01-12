/*
* 1.class 组件export default暴露出去.
* 2.业务组件:只呈现页面的View,利用@connect装饰器进行展现数据,
*
*
* */

import React from 'react'
import Logo from '../../component/logo/logo'
/*例如UI框架*/
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {register} from "../../redux/user.redux";

@connect(
	state => state.user,
	{register}
)
class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			pwd: '',
			repeatpwd: '',
			type: 'genius'    //boos  内部数据用zou redux
		};
		this.handleRegiter = this.handleRegiter.bind(this);  //这种的绑定的效果优于箭头的中的
	}

	handleRegiter() {
		this.props.register(this.state);
		console.log(this.state);
	}

	handChange(key, val) {
		this.setState({
			[key]: val      /*这里[]防止变成支付穿*/
		});
	}

	render() {
		const RadioItem = Radio.RadioItem;
		return (
			<div>
				{this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
				<Logo/>
				<h2>注册页</h2>
				{this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
				<List>
					<InputItem onChange={v => this.handChange('user', v)}>用户</InputItem>
					<InputItem type='password' onChange={v => this.handChange('pwd', v)}>密码</InputItem>
					<InputItem type='password' onChange={v => this.handChange('repeatpwd', v)}>确认密码</InputItem>
					{/*设置处理初始状态*/}
					<RadioItem checked={this.state.type == 'genius'} onChange={v => this.handChange('type', 'genius')}>
						牛人
					</RadioItem>
					<RadioItem checked={this.state.type == 'boos'} onChange={v => this.handChange('type', 'boos')}>
						Boos
					</RadioItem>
					<Button type='primary' onClick={this.handleRegiter}>注册</Button>
				</List>
			</div>
		)
	}
}

/*暴露出去*/
export default Register
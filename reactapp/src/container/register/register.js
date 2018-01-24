/*
* 1.class 组件export default暴露出去.
* 2.业务组件:只呈现页面的View,利用@connect装饰器进行展现数据,
*
* */

import React from 'react'
import Logo from '../../component/logo/logo'
/*例如UI框架*/
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
/*利用路由进行跳转*/
import {Redirect} from 'react-router-dom'

import {register} from "../../redux/user.redux";
import imoocForm from "../../component/imooc-form/imooc-form"

/*state.reducer 和action进行监控*/
@connect(
	state => state.user,
	{register}
)
@imoocForm
class Register extends React.Component {
	constructor(props) {
		super(props);
		/*设置初始状态的数据*/
		/*
		* 将用户的操作的内容存储在state里面
		* */
		/*this.state = {
			user: '',
			pwd: '',
			repeatpwd: '',
			type: 'genius'    //boos  内部数据用zou redux
		};*/
		this.handleRegiter = this.handleRegiter.bind(this);  //这种的绑定的效果优于箭头的中的
	}

	/*将数据传入 register dispatch(action)进行 引入
	* 利用user.redux.js中的 action与reducer
	* */
	componentDidMount() {
   	this.props.handleChange('type','genius');
	}

	handleRegiter() {
		this.props.register(this.props.state);
	}

	/*
	* 输入的时候进行设置的状态值
	* */

	/*	handChange(key, val) {
			this.setState({
				[key]: val      /!*这里[]防止变成字符串*!/
			});
		}*/

	render() {
		const RadioItem = Radio.RadioItem;
		return (
			<div>
				{this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
				<Logo/>
				<h2>注册页</h2>
				{this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
				<List>
					<InputItem onChange={v => this.props.handChange('user', v)}>用户</InputItem>
					<InputItem type='password' onChange={v => this.props.handChange('pwd', v)}>密码</InputItem>
					<InputItem type='password' onChange={v => this.props.handChange('repeatpwd', v)}>确认密码</InputItem>
					{/*设置处理初始状态*/}
					<RadioItem checked={this.props.state.type == 'genius'} onChange={v => this.props.handChange('type', 'genius')}>
						牛人
					</RadioItem>
					<RadioItem checked={this.props.state.type == 'boos'} onChange={v => this.props.handChange('type', 'boos')}>
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




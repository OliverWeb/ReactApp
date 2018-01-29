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
import imoocForm from '../../component/imooc-form/imooc-form'
/*/!*
* 1.利用外层函数进行包裹,函数内部return function({})
* 2.将子函数进行一次赋值,然后进行调用
* 3.函数单参数进行返回
* *!/

function hello(){
	console.log('hello I love React');
}
function WrapperHello(fn){
	return function(){
		console.log('before say Hello');
		fn();
		console.log('after say Hello');
	}
}
hello=WrapperHello(hello);
hello();*/

/*
* 给我组件返回另一个组件,返回的这个组件将给我的组件进行包裹的装饰,在原有的组件之上进行添加一些功能的,增强组件的扩展性
* 1.高阶组件(HOC)有两种:
*   (1).属性代理
*   (2).反向继承
* */
/*class Hello extends React.Component {
	render() {
		return <h3>I Love React</h3>
	}
}*/
//(1)反向继承改变声明周期
/*function WrapperHello(Comp){
	class WrapComp extends Comp{
		componentDidmount(){
			console.log('高阶组件新增声明周期,加载完成');
		}
		render(){
			return <Comp></Comp>
		}
	}
}*/
//装饰Hello组件的函数
/*function WrapperHello(Comp) {
	class WrapComp extends React.Component {
		render() {
			return (
				<div>
					<p>这里是HOC高阶组件特有的元素</p>
					<Comp {...this.props}/>
				</div>)
		}
	}
	return WrapComp;
}
@WrapperHello*/
// Hello=WrapperHello(Hello);


/*这里只要user里的字段*/
@connect(
	state => state.user,
	{login}
)
@imoocForm
class Login extends React.Component {
	constructor(props) {
		super(props);
		/*this.state = {
			user: '',
			pwd: ''
		}*/
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
		this.props.history.push('/register')
	}

	/*点击登录,这里要将数据传送到 auth.redux.js 进行认证处理*/
	handleLogin() {
		this.props.login(this.props.state);
	}

	/*
	* 提取公共函数的*/


	render() {
		return (
			<div>
				{(this.props.redirectTo && this.props.redirectTo !== '/login') ? <Redirect to={this.props.redirectTo}/> : null}
				<Logo/>
				<WingBlank>
					<List>
						{this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
						<InputItem onChange={v => this.props.handleChange('user', v)}>用户</InputItem>
						<InputItem type='password' onChange={v => this.props.handleChange('pwd', v)}>密码</InputItem>
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
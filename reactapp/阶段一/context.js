/*
* 1.解决层级的多个嵌套,数据传输问题
* 2.context是全局的,组件声明,所有的子元素可以直接获取
* 3.静态变量的方法static
* */
import React from 'react'
import PropTypes from 'prop-types'

class Sildebar extends React.Component {
	//第二层嵌套
	render() {
		return (
			<div>
				<p>侧边栏</p>
				<Nabar/>
			</div>
		)
	}
}
/*function Navbar(props,context){
		无状态进行传递context
}*/


class Nabar extends React.Component {
	/*
	*这里是子元素进行获取父元素的值,
	* 这里获取信息是从context中获取的,这里的context是全局的
	*
	* */
	static contextTypes={
		user:PropTypes={
			user:PropTypes.string
		}
	};
	//第三层嵌套
	render() {
		console.log(this.context);
		return (
			<div>{this.context.user}的导航栏</div>
		)
	}
}

class Page extends React.Component {
	/*
	*进行设置类型处理
	* 这里是全局属性,
	* 在使用全局属性的时候要进行设置他的类型
	* */
	static childContextTypes={
		user:PropTypes.string
	};
	//第一层嵌套
	constructor(props) {
		super(props);
		this.state = {user: '蜗牛'}
	}


	/*
	* 这里要在父元素进行定义的
	* */
	getChildContext() {
		return this.state
	}
	render() {
		const user = '蜗牛';
		return (
			<div>
				<p>我是{this.state.user}</p>
				<Sildebar/>
			</div>
		)
	}
}
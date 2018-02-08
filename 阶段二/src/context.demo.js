import React from 'react'
import PropTypes from 'prop-types'

class Sidebar extends React.Component {
	render() {
		return (
			<div>
				<p>侧边栏</p>
				<Navbar user={this.props.user}/>
			</div>
		)
	}
}
//function Navbar(props,context){} 对于无状态组件的处理
class Navbar extends React.Component {
	static contextTypes = {
		user: PropTypes.string
	};

	render() {
		return (
			<div>
				{this.context.user}的导航栏
			</div>
		)
	}
}

class Page extends React.Component {
	static  childContextTypes = {
		user: PropTypes.string
	}

	constructor(props) {
		super(props)
		this.state = {user: '蜗牛'}
	}

	getChildContext() {
		return this.state
	}

	render() {
		console.log();
		return (
			<div>
				<p>我是{this.state.user}</p>
				<Sidebar user={this.state.user}/>
			</div>
		)
	}
}

export default Page

/*
* context 是全局的,组件声明,所有的子元素可以直接获取
* 1.多级嵌套通过this.props,这样造成的后果就是的会照成的每一层组件都要进行的传递数据
* 2.this.context.user进行获取的全局数据
* 3.getChildContext这里使用contxt要进行类型定义
* 3.新版本将PropTypes抽离,建成独特的
* 4.contextTypes,childContextTypes:通过PropTypes进行处理的类型判断
*
*
*
* */
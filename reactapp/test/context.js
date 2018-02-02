/*
* 1.解决层级的多个嵌套,数据传输问题
* */
import React from 'react'

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

class Nabar extends React.Component {
	//第三层嵌套
	render() {
		return (
			<div>{this.props.user}的导航栏</div>
		)
	}
}

class Page extends React.Component {
	//第一层嵌套
	constructor(props) {
		super(props);
		this.state = {user: '蜗牛'}
	}

	getChildContent() {
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
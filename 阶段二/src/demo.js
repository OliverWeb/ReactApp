import React from 'react'

class Demo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 1,
			name: 'imooc'
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			num: this.state.num + 1
		})
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(this.props, nextState);
		if (this.state.num % 5 === 0) {
			return true
		}
		return false
	}

	render() {
		return (
			<div>
				<p>{this.state.num}</p>
				<button onClick={this.handleClick}>Click</button>
			</div>
		)
	}
}

export default Demo

/*
* shouldComponentUpdate:这里组要用于定制,后期的优化的
* setState更新数据后,执行render
* setState是通过队队列机制,setState对状态的更新是异步,高效更新数据
* 多个更新的setState进行更新状态的,render仅仅执行一次render
* 尽量不要在render进行setState,除非shouldComponentUpdate进行的定制,来控制render的执行;
*
* */
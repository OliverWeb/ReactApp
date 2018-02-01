import React from 'react'

class Demo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	/*
	*  todo 定制shouldComponentUpdate进行优化
	* 1.return false 停止的进行更新
	* 2.
	* */
	shouldComponentUpdate(nextProps, nextState) {
		/*
		* console.log(nextProps,nextState);
		* console.log(this.Props,this.State);
		* 通过对比这两个值,进行定制shouldComponentUpdate
		* */
		if(nextState.num!==this.state.num){
			return  true
		}
		if (this.state.num % 5 === 0) {
			return true;
		}

	}

	handleClick() {
		this.setState({
			num: this.state.num + 1
		})
	}

	render() {

		/*
		* todo  setState(): 这里禁止用setState,造成的循环
		* */
		return (
			<div>
				<p>{this.state.num}</p>
				<button onClick={this.handleClick}>Click</button>
			</div>
		)
	}
}

export default Demo
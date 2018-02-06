import React from 'react';
//负责从外部获取组件需要的参数,用户连接用的
import {connect} from 'react-redux'
import {addGun, removeGun, addGunAsync} from './01.learn.redux'

@connect(
	//要什么属性放到props,reducer.js 利用combineReducers将多个组件合并的
	state => ({num: state.count}),
	//用的方法放到props,自动进行dispatch,action可以进行解决
	{addGun, removeGun, addGunAsync}
)

	/*
	App=connect(
		state => ({num: state.count}),
		{addGun, removeGun, addGunAsync}
	)(App)
	*connect的装饰器的写法
	* 这里是connect是一个高阶组件,它接受一个App组件返回另一个组件
	* */

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>现在有机枪{this.props.num}把</h1>
				<button onClick={this.props.addGun}>申请武器</button>
				<button onClick={this.props.removeGun}>申请武器</button>
				<button onClick={this.props.addGunAsync}>拖两天</button>
			</div>
		)
	}
}

export default App
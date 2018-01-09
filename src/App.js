import React from 'react';
import {connect} from 'react-redux'
import {addGun, removeGun, addGunAsync} from './index.redux'

@connect(
	//要什么属性放到props,
	state => ({num: state.count}),
	//用的发个嫩啊放到props,自动进行dispatch
	{addGun, removeGun, addGunAsync}
)
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
//react-redux
import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from "./woniu-redux";
import {addGun, addGunAsync, removeGun} from "./index.redux";

export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
	//高阶组件进行返回一个组件的ConnectComponent
	return class ConnectComponent extends React.Component {
		//在进行的定义store传递的类型
		static contextTypes = {
			store: PropTypes.object
		};

		constructor(props, context) {
			super(props, context);
			this.state = {
				props: {}
			}
		}

		componentDidMount() {
			const {store} = this.context;
			//subscribe(listener),这里是为了自动更新update
			store.subscribe(() => this.update());
			this.update();
		}

		update() {
			//获取的mapStateToProps和mapDispatchToProps放到this.props
			const {store} = this.context;
			/*@connect(
				state=>({ num: state}),
				{addGun, removeGun, addGunAsync}
			)*/
			const stateProps = mapStateToProps(store.getState());
			const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch);
			this.setState({
				props: {
					...this.state.props,
					...stateProps,
					...dispatchProps,
				}
			})
		}

		render() {
			//connect高阶组件将传递WrapComponent在返回一个新的组件,组件内部可以通过this.props进行获取
			return <WrapComponent {...this.state.props}/>
		}
	}
};

export class Provider extends React.Component {
	static  childContextTypes = {
		store: PropTypes.object
	};

	getChildContext() {
		//把store放到全局里面,使其他的组件可以获取到
		return {store: this.store}
	}

	constructor(props, context) {
		super(props, context);
		this.store = props.store
	}

	render() {
		return this.props.children
	}
}


/*
* connect这里主要是讲state状态数据和执行的dispatch(action)的action事件进行的一个汇总
* 1.connect 负责连接组件,给到redux里数据放到组件的属性的里
* 2.Provider,是把store放到context里,这样的所有的子元素都可以直接获取的到store
* 3.connect:  高阶组件
*   (1)WrapComponent这里首先要接受一个组件,将state中的数据放进connect里面,返回一个组件
*   (2)数据变化的时候,能够通知组件
* 4.通过this.context进行获取全局的store
* 5.update中dispatch(action),这也就是利用connect
* */
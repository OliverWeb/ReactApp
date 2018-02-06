/*
* react-redux
* connect 负责链接组件,给到redux里的数据放到组件的属性里
* 1.这里Provider进行处理通过context进行处理全局context
*
*
* */
import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from './'
/*
*  1.负责接收一个组件,把state里的一些数据放进去,返回一个组件
*  2.数据变化的时候,能够进行通知组件
* */
//高阶函数,这里使用箭头函数,

/*export function connect(mapStateToProps,mapStateToProps){
	return function (WrapCOmponent){
		return class ConnectComponent extends React.Component{}
	}
}*/

export const connect=(mapStateToProps=state=>state,mapDispatchToProp={})=>(WrapComponent)=>{
	/*这里的WrapComponent就是的装饰器下面的组件的*/
	return class ConnectComponent extends React.Component{
		static contextTypes={
			store:PropTypes.object
		}
		constructor(props,context){
			super(props,context);
			this.state={
				props:{}
			}
		}
		componentDidMount(){
			/*每次进行dispatch都会进行subscribe*/
			const {store}=this.store;
			store.subscribe(()=>this.update());
		}
		update(){
			/*
			* 获取的mapStateToProps和mapDispatchToProp放入到this.props
			* */
			const {store} =this.context;
			const stateProps=mapStateToProps(store.getState());
			/*方法不能直接给,因为要进行dispatch*/
			const dispatchProps=bindActionCreators(mapDispatchToProp,store.dispatch);
			/*将props合并在一起*/
			this.setState({
				props:{
					...this.state.props,
					...stateProps,
					...dispatchProps
				}
			})
		}
		render(){
			/*app里面就可以的获得redux里的值了,这用就是为什么获取从redux获取数据通过this.props*/
			return  <WrapComponent {...this.state.props}/>
		}
	}
}
/*Provider,把store放到context(这里是全局的,其他的组件的可以直接获取的,而不用考虑嵌套的层级关系)里.所有的元素可以直接获取store*/

/*
* 这里仅仅是进行组件的封装的,store传给provide
* */
export class Provider extends React.Component{
	//这里进行设置store的属性
	static childContextTypes={
		store:PropTypes.object
	}
	getChildContext(){
		return {store:this.store}
	}
	constructor(props,context){
		super(props,context);
		this.store=props.store;
	}
	render(){
		return this.props.children
	}
}
export default Provider
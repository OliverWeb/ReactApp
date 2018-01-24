import React from 'react'
export default function imoocForm(Comp) {
	/*@imoocForm下面的组件,使用*/
	return class WrapperComp extends React.Component{
		constructor(props){
			super(props);
			this.state={};
			this.handleChange=this.handleChange.bind(this);
		}
		handleChange(key, val) {
			console.log(val);
			this.setState({
				[key]: val
			});
		}
		render(){
			return  <Comp handleChange={this.handleChange} state={this.state} {...this.props}/>
		}
	}
}
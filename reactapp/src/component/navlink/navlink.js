/*
* 属性校验:prop.types
* */
import React from 'react'
import PropTypes from 'prop-types'
class NavLinkBar extends React.Component {
	static proTypes={
		data:PropTypes.array.isRequired
	};
	render() {
		const navList=this.props.data.filter(v=>!v.hide);
		console.log(navList);
		return (
			<div>footer</div>
		)
	}

}

export default NavLinkBar
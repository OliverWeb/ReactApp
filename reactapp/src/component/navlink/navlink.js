/*
* 1.属性校验:prop.types
* 2.引入图片地址;利用webpack中的require
* 3.这里的navlink不是路由组件的需要引入withRouter进行获取和路由相关的信息,pathname
* 4页面的跳转利用
* */
import React from 'react'
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
@withRouter
class NavLinkBar extends React.Component {
	/*设置数据类型*/
	static proTypes={
		data:PropTypes.array.isRequired
	};
	render() {
		/*锅炉hide:true的类型*/
		const navList=this.props.data.filter(v=>!v.hide);
		const {pathname}=this.props.location;
		return (
			<TabBar>
				{navList.map(v=>(
					<TabBar.Item
						key={v.path}
						title={v.text}
						icon={{uri:require(`./img/${v.icon}.png`)}}
						selectedIcon={{uri:require(`./img/${v.icon}-active.png`)}}
						selected={pathname===v.path}
						onPress={()=>{this.props.history.push(v.path)}}
					/>
				))}
			</TabBar>
		)
	}

}

export default NavLinkBar
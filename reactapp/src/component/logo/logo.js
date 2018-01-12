/*
* 1.Logo公共组件
* 2.图片引用,要给定变量名
* 3.
* */

import React from 'react'
import logoImg from './job.png'
import './logo.css'
class Logo extends React.Component{
	render(){
		return(
			<div className="logo-container">
				<img src={logoImg} alt=""/>
			</div>
		)
	}
}
export default Logo
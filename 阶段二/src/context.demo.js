import React from 'react'
class Sidebar extends React.Component{
	render(){

	}
}
class Navbar extends React.Component{
	render(){

	}
}
class Page extends React.Component{
	render(){
		const user='蜗牛';
		return(
			<div>
				<p>我是{user}</p>
			</div>
		)
	}
}
export default Page

/*
* contenxt 是全局的,组件声明,所有的子元素可以直接获取
*
* */
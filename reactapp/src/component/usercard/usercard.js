/*
* 不是路由组件不能进行获取,需要利用withRouter,进行处理
* */
import React from 'react'
import ProTypes from 'prop-types'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
@withRouter
class UserCard extends React.Component {
	static propTypes = {
		userList: ProTypes.array.isRequired
	};
	handleClick(v){
		/*跳转需要利用Withrouter,这里的跳转进行添加参数*/
		this.props.history.push(`/chat/${v._id}`);
	}
	render() {
		const Header = Card.Header;
		const Body = Card.Body;
		return (
			<WingBlank>
				<WhiteSpace/>
				{this.props.userList.map(v => (
					v.avatar ?
						(<Card
							onClick={()=>this.handleClick(v)}
							key={v._id}>
							<Header
								title={v.user}
								thumb={require(`../img/${v.avatar}.png`)}
								extra={<span>{v.title}</span>}/>
							<Body>
							{v.type === 'boos' ? <div>公司:{v.company}</div> : null}
							{v.desc.split('\n').map(d =>
								(
									<div key={d}>{d}</div>
								)
							)}
							{v.type === 'boos' ? <div>薪资:{v.money}</div> : null}
							</Body>
						</Card>) : null
				))}
			</WingBlank>
		)
	}
}

export default UserCard
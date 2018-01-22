import React from 'react'
import ProTypes from 'prop-types'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'

class UserCard extends React.Component {
	static propTypes = {
		userList: ProTypes.array.isRequired
	};

	render() {
		const Header = Card.Header;
		const Body = Card.Body;
		return (
			<WingBlank>
				<WhiteSpace/>
				{this.props.userList.map(v => (
					v.avatar ?
						(<Card key={v._id}>
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
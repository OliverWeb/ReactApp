/*
* 1.用户登录的信息都放在redux中
* */
import React from 'react'
import {connect} from 'react-redux'
import {Result, List, WhiteSpace, WingBlank, Button, Modal} from 'antd-mobile'
import browserCookie from 'browser-cookies'
import {logoutSubmit} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

const myImg = src => <img style={{width: 50}} src={src} className="spe am-icon am-icon-md" alt=""/>;

/*利用装饰器connect可以获取redux中的数据*/
@connect(
	state => state.user,
	{logoutSubmit}
)
class User extends React.Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
	}

	logout() {
		const alert = Modal.alert;
		alert('注销', '确认退出登录吗???', [
			{text: '取消', onPress: () => console.log('cancel')},
			{
				text: '确认', onPress: () => {
					browserCookie.erase('userid');
					/*清楚readux的数据*/
					this.props.logoutSubmit()
				}
			},
		])


	}

	render() {
		/*获取数据可以的通过this.props进行获取*/
		const props = this.props;
		const Item = List.Item;
		const Brief = Item.Brief;

		return props.user ? (
				<div>
					<Result
						img={myImg(require(`../img/${props.avatar}.png`))}
						title="支付成功"
						message={props.type === 'boos' ? props.company : null}
					/>
					<List renderHeader={() => '简介'}>
						<Item multipleLine>
							{props.title}
							{props.desc.split('\n').map(v => <Brief key={v}>{v}</Brief>)}
							{props.money ? <Brief>薪资:{props.money}</Brief> : null}
						</Item>
					</List>
					<WhiteSpace/>
					<WingBlank>
						<Button type="warning" onClick={this.logout}>退出登录</Button>
					</WingBlank>
				</div>)
			: <Redirect to={props.redirectTo}/>
	}
}

export default User
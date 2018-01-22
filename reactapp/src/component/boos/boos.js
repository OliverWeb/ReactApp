/*
* 1.刚进入页面进行请求
* */
import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chartuser.redux'
import UserCard from "../usercard/usercard";

@connect(
	state => state.chartuser,
	{getUserList}
)
class Boos extends React.Component {
	componentDidMount() {
		this.props.getUserList('genius');
	}

	render() {
		return <UserCard userList={this.props.userList}/>

	}
}

export default Boos
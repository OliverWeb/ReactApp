/*
* title:职位名称,
* 2.点击保存按钮走redux进行的处理数据
* 利用@connect将boosinfo,redux.js链接一起
* */
import React from 'react'
import {Redirect} from 'react-router-dom'
import {
	NavBar,
	InputItem,
	TextareaItem,
	Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'

/*
* 这里的connect中state.reducer,和action
*
* */
@connect(
	state => state.user,
	{update}
)
class Boosinfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			desc: '',
			company: '',
			money: ''
		}
	}

	onChange(key, v) {
		this.setState({
			[key]: v
		})
	}

	render() {
		const path = this.props.location.pathname;
		const redirect = this.props.redirectTo;

		return (
			<div>
				{/*这里处理进行跳转*/}
				{redirect && redirect !== path ? <Redirect to={this.props.redirectTo}/> : null}
				<NavBar mode="dark">Boss信息信息列表</NavBar>
				<AvatarSelector
					selectAvatar={(imgName) => {
						this.setState({
							avatar: imgName
						})
					}}
				/>
				<InputItem onChange={(v) => this.onChange('title', v)}>招聘职位：</InputItem>
				<InputItem onChange={(v) => this.onChange('company', v)}>公司名称：</InputItem>
				<InputItem onChange={(v) => this.onChange('money', v)}>职位薪资：</InputItem>
				<TextareaItem rows={2} count={100} title="职位要求：" autoHeight onChange={(v) => this.onChange('desc', v)}/>
				<Button
					onClick={() => {
						/*这里的方法是redux给的*/
						this.props.update(this.state);
					}}
					type='primary'>保存</Button>
			</div>
		)
	}
}

export default Boosinfo
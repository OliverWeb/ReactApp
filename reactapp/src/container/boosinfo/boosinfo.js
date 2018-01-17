/*
* title:职位名称,
* 2.点击保存按钮走redux进行的处理数据
* 利用@connect将boosinfo,redux.js链接一起
* */
import React from 'react'
import {
	NavBar,
	InputItem,
	TextareaItem,
	List,
	WingBlank,
	WhiteSpace,
	Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'

@connect(
  state=>state.update,
	{update}
)
class Boosinfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		}
	}

	onChange(key, v) {
		this.setState({
			[key]: v
		})
	}

	render() {
		return (
			<div>
				<NavBar mode="dark">Boss信息信息列表</NavBar>
				<AvatarSelector
					selectAvatar={(imgName) => {
						this.setState({
							avator: imgName
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
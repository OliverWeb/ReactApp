/*
* 图片的加载 require();进行加载
* */
import React from 'react'
import {Grid,List} from 'antd-mobile'

class AvatarSelector extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	render() {
		const avatarList = 'boy,bull,chick,crab,girl,koala,lemur,man,pig,tiger,woman,zebra'
			.split(',')
			.map(v => ({
				icon: require(`../img/${v}.png`),
				text: v
			}));
		/*
		* 定义已经选过的头像:gridHeader
		* */
		const gridHeader=this.state.text?
			(<div>
				<span>已选择头像</span>
				<img style={{width:20}} src={this.state.icon} alt=""/>
			</div>):
			'请选着头像:';
		return (
			<div>
				<List renderHeader={()=>gridHeader}>
					<Grid
						data={avatarList}
						onClick={ele => {
							this.setState(ele);
							this.props.selectAvatar(ele.text);
						}}
					/>
				</List>
			</div>
		)
	}
}
export default AvatarSelector
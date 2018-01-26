import React from 'react'
import {List, InputItem} from 'antd-mobile'
import io from 'socket.io-client'
import {getMegList,sendMsg,recvMsg} from '../../redux/chat.redux'
//这里是,页面是:3000跨域的sever:9093所以这里要进行手动进行更改一下 websocket,
import {connect} from 'react-redux'
const socket = io('ws://localhost:9093');
@connect(
	state=>state,
	{getMegList,sendMsg,recvMsg}
)
class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {text: '',msg:[]}
	}

	componentDidMount() {
		/*这里进行启动获取消息的列表*/
		this.props.getMegList();
		this.props.recvMsg();
		/*socket.on('recvmsg', (data)=>{
			this.setState({
				msg:[...this.state.msg,data.text]
			});
		});*/
	}

	handleSubmit() {
		// socket.emit('sendmsg', {text: this.state.text});
		// console.log(this.state);
		const from=this.props.user._id;
		const to=this.props.match.params.user;
		const msg=this.props.text;
		this.props.sendMsg({from,to,msg});
		this.setState({text:''});
	}

	render() {
		return (
			<div>
				{this.state.msg.map(v=>{
					return <p key={v}>{v}</p>
				})}
				<div className="stick-footer">
					<List>
						<InputItem
							pacheholder='请输入'
							value={this.state.text}
							onChange={v => {
								this.setState({text: v})
							}}
							extra={<span onClick={() => this.handleSubmit()}>发送</span>}
						>发送留言</InputItem>
					</List>
				</div>
			</div>
		)
	}
}

export default Chat
import React from 'react'
import {List, InputItem, NavBar} from 'antd-mobile'
import io from 'socket.io-client'
import {getMegList, sendMsg, recvMsg} from '../../redux/chat.redux'
//这里是,页面是:3000跨域的sever:9093所以这里要进行手动进行更改一下 websocket,
import {connect} from 'react-redux'

const socket = io('ws://localhost:9093');

@connect(
	state => state,
	{getMegList, sendMsg, recvMsg}
)
class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {text: '', msg: []}
	}

	componentDidMount() {
		/*这里进行启动获取消息的列表,放在dashboard*/
		/*
		* 防止第一次进入页面是的可以的获取聊天数据的,但是刷新当前的页面的时候的没有了
		* */
		if (!this.props.chat.chatmsg.length) {
			this.props.getMegList();
			this.props.recvMsg();
		}
		/*socket.on('recvmsg', (data)=>{
			this.setState({
				msg:[...this.state.msg,data.text]
			});
		});*/
	}

	handleSubmit() {
		// socket.emit('sendmsg', {text: this.state.text});
		// console.log(this.state);
		const from = this.props.user._id;
		const to = this.props.match.params.user;
		const msg = this.state.text;
		this.props.sendMsg({from, to, msg});
		this.setState({text: ''});
	}

	render() {
		const userid = this.props.match.params.user;
		const Item = List.Item;
		const users=this.props.chat.users;
		if(!users[userid]){
			return null;
		}
		return (
			<div id='chat-page'>
				<NavBar mode='dark'>
					{users[userid].name}
				</NavBar>
				{this.props.chat.chatmsg.map(v => {
					return v.from === userid ? (
						<List key={v._id}>
							<Item>{v.content}</Item>
						</List>
					) : (
						<List key={v._id}>
							<Item extra={'avatar'} className='chat-me'>{v.content}</Item>
						</List>
					)
				})}
				<div className="stick-footer">
					<List>
						<InputItem
							pacehol='请输入'
							value={this.state.text}
							onChange={v => {
								this.setState({text: v})
							}}
							extra={<span onClick={() => this.handleSubmit()}>发送</span>}
						/>
					</List>
				</div>
			</div>
		)
	}
}

export default Chat
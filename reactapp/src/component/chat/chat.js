import React from 'react'
import {List, InputItem, NavBar, Icon, Grid} from 'antd-mobile'
/*
* socket.io-client 这里是socket.io的客户端
* */
import io from 'socket.io-client'
import {getMegList, sendMsg, recvMsg, readMsg} from '../../redux/chat.redux'
//这里是,页面是:3000跨域的sever:9093所以这里要进行手动进行更改一下 websocket,
import {connect} from 'react-redux'
import {getChatId} from "../../util";
/*这里是为了解决跨域问题,协议是websocket*/
const socket = io('ws://localhost:9093');

/*socket.on('recvmsg',function(data){
console.log(data);
});*/

@connect(
	state => state,
	{getMegList, sendMsg, recvMsg, readMsg}
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
		//这里手动进行派发事件
	}

	//组件被移除,被隐藏的时候进行触发的
	componentWillUnmount() {
		const to = this.props.match.params.user;
		this.props.readMsg(to);
	}

	fixCarousel() {
		setTimeout(function () {
			window.dispatchEvent(new Event('resize'))
		}, 0);
	}

	handleSubmit() {
		// 这里的emit是发送到后端socket.emit('sendmsg', {text: this.state.text});
		// console.log(this.state);
		const from = this.props.user._id;
		const to = this.props.match.params.user;
		const msg = this.state.text;
		this.props.sendMsg({from, to, msg});
		this.setState({
			text: '',
			showEmoji: false
		});
	}

	render() {
		const emoji = '😀 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 ☺ 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤷 🤣 😅 👞 👟 👡 👢 👑 👒 😀 😂 🤣 😃 😄 😅 😆 😉 😊 😋😀 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😀 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😀 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😀 😂 🤣 😃 😄 😅 😆 😉 😊 😋'
			.split(' ')
			.filter(v => v)
			.map(v => ({text: v}));
		const Item = List.Item;
		const userid = this.props.match.params.user;
		const users = this.props.chat.users;
		if (!users[userid]) {
			return null;
		}
		//这里进行信息的过滤
		const chatid = getChatId(userid, this.props.user._id);
		const chatmsgs = this.props.chat.chatmsg.filter(v => v.chatid === chatid);
		return (
			<div id='chat-page'>
				<NavBar
					mode='dark'
					icon={<Icon type="left"/>}
					onLeftClick={() => {
						this.props.history.goBack();
					}}
				>
					{users[userid].name}
				</NavBar>
				{chatmsgs.map(v => {
					const avatar = require(`../img/${users[v.from].avatar}.png`);
					return v.from === userid ? (
						<List key={v._id}>
							<Item
								thumb={avatar}
							>{v.content}</Item>
						</List>
					) : (
						<List key={v._id}>
							<Item
								extra={<img src={avatar}/>}
								className='chat-me'>{v.content}</Item>
						</List>
					)
				})}
				<div className="stick-footer">
					<List>
						<InputItem
							placeholder='请输入内容......'
							value={this.state.text}
							onChange={v => {
								this.setState({text: v})
							}}
							extra={
								<div>
									<span
										style={{marginRight: 15}}
										onClick={() => {
											this.setState({
												showEmoji: !this.state.showEmoji
											});
											this.fixCarousel();
										}}
									>😀</span>
									<span onClick={() => this.handleSubmit()}>发送</span>
								</div>
							}
						/>
					</List>
					{this.state.showEmoji ? <Grid
						data={emoji}
						columnNum={9}
						carouselMaxRow={4}
						isCarousel={true}
						onClick={
							el => {
								this.setState({
									text: this.state.text + el.text
								})
							}
						}
					/> : null}
				</div>
			</div>
		)
	}
}

export default Chat
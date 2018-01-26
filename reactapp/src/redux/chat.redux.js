import axios from 'axios'
import io from 'socket.io-client'

const socket = io('ws://localhost:9093');
//获取聊天列表
const MSG_LIST = 'MSG_LIST';
//读信息,别人发的信息
const MSG_RECV = 'MSG_RECV';
//表示已读
const MSG_READ = 'MSG_READ';
const initState = {
	chatmsg: [],
	unread: 0
};

/*进行设置reducer*/
export function chat(state = initState, action) {
	switch (action.type) {
		case MSG_LIST:
			return {...state, chatmsg: action.payload, unread: action.payload.filter(v => !v.read).length};
		case MSG_RECV:
			return {...state,chatmsg:[...state.chatmsg,action.payload]};
		// case MSG_READ:
		default:
			return state
	}
}

//action
function msgList(msgs) {
	return {type: 'MSG_LIST', payload: msgs}
}
function msgRecv(msg){
	return {type:MSG_RECV,payload:msg}
}
/*这个是在进入的页面后进行的获取接受消息*/
export function recvMsg(){
	return dispatch=>{
		socket.on('recvmsg',function(data){
			dispatch(msgRecv(data));
		})
	}
}
export function sendMsg({from, to, msg}) {
	//共外部的使用的sendMsg,必须返回一个对象
	return dispatch => {
		socket.emit('sendmsg', {from, to, msg});
	}
}

//action
export function getMegList() {
	return dispatch => {
		axios.get('/user/getmsglist')
			.then(res => {
				if (res.state === 200 && res.data.code === 0) {
					dispatch(msgList(res.data.msgs));
				}
			})
	}
}



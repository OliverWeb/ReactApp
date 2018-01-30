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
	users:{},
	unread: 0
};

/*进行设置reducer*/
export function chat(state = initState, action) {
	switch (action.type) {
		case MSG_LIST:
			return {...state, users:action.payload.users,chatmsg: action.payload.msgs, unread: action.payload.msgs.filter(v=>!v.read).length};
		case MSG_RECV:
			return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+1};
		// case MSG_READ:
		default:
			return state
	}
}

//action
function msgList(msgs,users) {
	return {type: 'MSG_LIST', payload: {msgs,users}}
}
function msgRecv(msg){
	return {type:MSG_RECV,payload:msg}
}
/*这个是在进入的页面后进行的获取接受消息*/
export function recvMsg(){
	return dispatch=>{
		socket.on('recvmsg',function(data){
			console.log('recvmsg',data);
			dispatch(msgRecv(data));
		})
	}
}
export function sendMsg({from, to, msg}) {
	//共外部的使用的sendMsg,必须返回一个对象,或者返回一个函数
	return dispatch => {
		socket.emit('sendmsg', {from, to, msg});
	}
}

//刚进入页面的时候,进行触发的事件,首次进入进行获取用户列表
export function getMegList() {
	return dispatch => {
		axios.get('/user/getmsglist')
			.then(res => {
				if (res.status === 200 && res.data.code === 0) {
					dispatch(msgList(res.data.msgs,res.data.users));
				}
			})
	}
}



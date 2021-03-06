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
	users: {},
	unread: 0
};

/*进行设置reducer*/
export function chat(state = initState, action) {
	switch (action.type) {
		case MSG_LIST:
			return {
				...state,
				users: action.payload.users,
				chatmsg: action.payload.msgs,
				unread: action.payload.msgs.filter(v => !v.read && v.to === action.payload.userid).length
			};
		case MSG_RECV:
			const n = action.payload.to === action.userid ? 1 : 0;
			return {...state, chatmsg: [...state.chatmsg, action.payload], unread: state.unread + n};
		case MSG_READ:
			const {from, num} = action.payload;
			return {
				...state,
				chatmsg: state.chatmsg.map(v => ({...v, read: from === v.from ? true : v.read})),
				unread: state.unread - num
			};
		default:
			return state
	}
}

//action
function msgList(msgs, users, userid) {
	return {type: 'MSG_LIST', payload: {msgs, users, userid}}
}

function msgRecv(msg, userid) {
	return {userid, type: MSG_RECV, payload: msg}
}

function msgRead({from, userid, num}) {
	return {type: MSG_READ, payload: {from, userid, num}}
}


/*
* callback hell,多层嵌套就可以了,回调函数实现异步处理
* */
/*setTimeout(()=>{
	console.log(1);
},1000);*/

/*
* 利用axios插件进行实现异步处理,多层嵌套压缩层一层实现的异步请求
* */
/*axios.post().then(res => {
	return "ok"
}).then();*/
//async+await配合使用,await必须在async内部使用,这一部分是es7的内容
//async将await进行包裹起来


/*export function readMsg_test(from) {
	return async (dispatch, getState) => {
		const res = await axios.post('/user/readmsg', {from});
		const res1 = await axios.post('/user/readmsg', {from});
		/!*这中可以进行先发送res请求再发res2请求*!/
		const userid = getState().user._id;
		if (res.status === 200 && res.data.code === 0) {
			dispatch(msgRead({userid, from, num: res.data.num}))
		}
	}
}*/


export function readMsg(from) {
	return (dispatch, getState) => {
		axios.post('/user/readmsg', {from})
			.then(res => {
				const userid = getState().user._id;
				if (res.status === 200 && res.data.code === 0) {
					dispatch(msgRead({userid, from, num: res.data.num}))
				}
			})
	}
}


/*这个是在进入的页面后进行的获取接受消息*/
export function recvMsg() {
	return (dispatch, getState) => {
		socket.on('recvmsg', function (data) {
			const userid = getState().user._id;
			dispatch(msgRecv(data, userid));
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
/*
*1.return:这里有两个参数,dispatch和getState,
* getState这里相当于store.getState,进行获取应用里面所有的状态
 *  */

export function getMegList() {
	return (dispatch, getState) => {
		axios.get('/user/getmsglist')
			.then(res => {
				if (res.status === 200 && res.data.code === 0) {
					const userid = getState().user._id
					dispatch(msgList(res.data.msgs, res.data.users, userid));
				}
			})
	}
}



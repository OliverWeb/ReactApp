/*
* 1.reducer
* 2.action
* */
import axios from 'axios';

const USER_LIST = 'USER_LIST';
const initState = {
	userList: []
};

// reducer
export function chartuser(state = initState, action) {
	switch (action.type) {
		case "USER_LIST":
			/*
				*由于这里的initState随时有可能加其他的数据,
				* 这里不进行覆盖的,所以使用对象的结构
				* 1.用户的请求的数据msg失败的时的msg.
				* */
			return {...state, userList: action.payload};
		default:
			return state;
	}
}

//action
function userList(data) {
	return {type: USER_LIST, payload: data}
}
//进行调用的action
export function getUserList(type) {
	return dispatch => {
		axios.get('/user/list?type=' + type).then(
			res => {
				if (res.data.code === 0) {
					dispatch(userList(res.data.data));
					/*这里使用dispatch,不在是用setState
					* this.setState({
						data: res.data.data
					});*/
				}
			}
		)
	}
}
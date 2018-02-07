import {createStore} from 'redux'
// import {createStore} from './woniu-redux'

// 这就是reducer处理函数，参数是状态和新的action
function counter(state = 0, action) {
	// let state = state||0
	switch (action.type) {
		case '加机关枪':
			return state + 1;
		case '减机关枪':
			return state - 1;
		default:
			return 10
	}
}

// 新建保险箱
const store = createStore(counter);
// console.log
const init = store.getState();
console.log(`一开始有机枪${init}把`);

function listener() {
	const current = store.getState();
	console.log(`现在有机枪${current}把`)
}

// 订阅，每次state修改，都会执行listener
store.subscribe(listener);
// 提交状态变更的申请
store.dispatch({type: '加机关枪'});
store.dispatch({type: '加机关枪'});
store.dispatch({type: '加机关枪'});
store.dispatch({type: '减机关枪'});
store.dispatch({type: '减机关枪'});


/*
* redux中API调用
* 1.createStore(reducer)  创建仓库,保险箱
* 2.getState(),进行获取状态
* 3.subscribe(listener)这里进行监听订阅函数的,每次进行派发事件的时候自动处理
* 4.dispatch(action)进行派发事件的,这里的防止操作函数的,返回action对象的,利用reducer仅进行判断处理的状态
* 5.这些暴露的接口都是的createStore
*
* todo redux基本的使用方法:
* 1.进行创建reducer
* 2.进行创建保险箱createStore(reducer)
* 3.subscribe(listener):订阅一下监听函数
* 3.dispatch(action); 这里action返回一个对象,进行的派发事件
*  备注:更优雅的是使用react-redux.可以使用subscribe和dispatch
*
* */

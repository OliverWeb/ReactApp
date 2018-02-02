/*
* const=createStore(counter)中store实现方法
* */

export function createStore(reducer) {

	let currentState = {};    //当前的状态
	let currentListeners = []; //存放的监听器
	//获取当前的状态,这里函数直接返回
	function getState() {
		return currentState
	}

	function subscribe(listener) {
		currentListeners.push(listener);
	}

	function dispatch(action) {
		//这里的dispatch直接调用的action,这里返回新的返回值
		currentState = reducer(currentState, action);
		currentListeners.forEach(v=>v());
		return action   //这里的也是返回一个对象
	}
	dispatch({type:'@这是一个特殊的例子开始的时候就执行'});
	return {getState,subscribe,dispatch}

}

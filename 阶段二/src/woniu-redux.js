export function createStore(reducer) {
	let currentState = {};
	let currentListeners = [];
	function getState() {
		return currentState
	}

	function subscribe(listener) {
		currentListeners.push(listener);
	}

	function dispatch(action) {
		currentState = reducer(currentState, action);
		currentListeners.forEach(v => v());
		return action;
	}

	dispatch({type:'@WO-NIU'});  //默认执行一次
	return {getState, subscribe, dispatch}
}


/*
*dispatch中调用的reducer函数,这也就是为什么dispatch(action)后返回的对象,自动的执行reducer的原因
*
*
* */

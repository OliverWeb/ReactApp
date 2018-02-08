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

	dispatch({type: '@WO-NIU'});  //默认执行一次
	return {getState, subscribe, dispatch}
}

function bindActionCreator(creator, dispatch) {
	return (...args) => {
		//改变其他的状态把扎实能状态,一级dispatch(listener)中的listener能够至此能
		dispatch(creator(...args));
	};
}

export function bindActionCreators(creators, dispatch) {
	let bound = {};
	Object.keys(creators).forEach(v => {
		let creator = creators[v];
		bound[v] = bindActionCreator(creator, dispatch);
	});
	return bound
}



/*
*dispatch中调用的reducer函数,这也就是为什么dispatch(action)后返回的对象,自动的执行reducer的原因
*todo 参数的透传
*
* */

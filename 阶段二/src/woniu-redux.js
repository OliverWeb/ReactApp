export function createStore(reducer, enhancer) {
	//判断是否存在中间件
	if(enhancer){
		//将creatStore进行包裹一下
		return enhancer(createStore)(reducer)
	}
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
export function applyMiddleware(...middlewares) {
	//这里的applyMiddleware中间件也就是createStore()中enhancer这个参数
	// middleware.map.....中间件多的情况下进行的遍历的处理
	return createStore=>(...args)=>{
		//这里可以获取的store
		const store=createStore(...args);
		let dispatch=store.dispatch;
		const midApi={
			getState:store.getState,
			dispatch:(...args)=>dispatch(...args)
		};
		 const middlewareChain=middlewares.map(middleware=>middleware(midApi));
		dispatch=compose(...middlewareChain)(store.dispatch);
		// dispatch=middleware(midApi)(store.dispatch);
		//middleware(midApi)(store.dispatch)(action)
		return {
			...store,
			dispatch
		}
	}
}
// compose(fn1,fn2,fn3);
// fn1(fn2(fn3));
//将这些函数进行依次调用
export function compose(...funcs){
	if(funcs.length===0){
		return arg=>arg
	}
	if(funcs.length===1){
		return funcs[0]
	}
	return funcs.reduce((ret,item)=>(...args)=>ret(item(...args)))
}


export function bindActionCreators(creators, dispatch) {
	// let bound = {};
	// Object.keys(creators).forEach(v => {
	// 	let creator = creators[v];
	// 	bound[v] = bindActionCreator(creator, dispatch);
	// });
	// return bound
	// todo 利用reduce进行合并
	return Object.keys(creators).reduce((ret,item)=>{
		ret[item]=bindActionCreator(creators[item],dispatch);
		return ret
	},{})
}



/*
*dispatch中调用的reducer函数,这也就是为什么dispatch(action)后返回的对象,自动的执行reducer的原因
*todo 参数的透传
* reduce()处理累加的情况
*
* */

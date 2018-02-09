/*
* todo 精简的redux函数
* const=createStore(counter)中store实现方法
* enhancer增强器
* */
export function createStore(reducer,enhancer) {
	if(enhancer){
		/*使用enhancer将createStore进行包一层函数,
		*然后传reducer操作函数进行处理一下
		* 这里的createStore进行了一次扩展
		*
		* 这里的enhancer进行传递两次参数,第一层参数和第二程参数
		* */
		return enhancer(createStore)(reducer)
	}
	/*
	* currentState,状态树
	* currentListeners:状态变化的时候的进行调用的函数
	* */
	let currentState = {};    //当前的状态
	let currentListeners = []; //存放的监听器
	//获取当前的状态,这里函数直接返回
	function getState() {
		return currentState
	}

	function subscribe(listener) {
		//这里就是push一个监听器
		currentListeners.push(listener);
	}
	//发起一个修改的方法
	function dispatch(action) {
		//这里的dispatch直接调用的action,这里返回新的返回值
		currentState = reducer(currentState, action);
		currentListeners.forEach(v=>v());
		return action   //这里的也是返回一个对象
	}
	dispatch({type:'@这是一个特殊的例子开始的时候就执行'});
	return {getState,subscribe,dispatch}
}
/*
* 中间件,applyMiddleware(thunk),middleware:中间件
* createStore(reducer,applyMiddleware),
* createStore(reducer,enhancer);
* */
export function applyMiddleware01(middleware){
	return createStore=>(...args)=>{
		const store=createStore(...args);
		let dispatch=store.dispatch;
		const midApi={
			getState:store.getState,
			dispatch:(...args)=>dispatch(...args)
		};
		dispatch=middleware(midApi)(store.dispatch);
		return {
			...store,
			dispatch
		}
	}
}



//{addGun,removeGun,addGunAsync},这里的方法的,成为生成器,creators
function bindActionCreator(creator,dispatch){
	return (...args)=>dispatch(creator(...args))
}
export function bindActionCreators(creators,dispatch){
	/*let bound={};
	Object.keys(creators).forEach(v=>{
		let creator =creators[v];
		bound[v]=bindActionCreator(creator,dispatch);
	});
	return bound*/
	return Object.keys(creators).reduce((ret,item)=>{
		ret[item]=bindActionCreator(creators[item],dispatch)
		return ret
	},{});
}


















import {createStore} from 'test/index.redux'
//根据老的state和action生成新的state,代码的库的事件
//createStore();函数库
function couter(state = 0, action) {
	switch (action.type) {
		case '加机关枪':
			return state += 6;
		default:
			return 10;
	}
}

/*新建store保险箱*/
const store = createStore(couter);

/*订阅的事件,将要处理的函数*/
function listener() {
	const current = store.getState();
	console.log(current);
}

//subscribe订阅将要操作的函数,每次就行修改state状态的时候,subscribe都会自动执行的listener函数
store.subscribe(listener);
//进行事件处理,派发事件,传递action;
store.dispatch({type: '加机关枪'});   //dispatch(action);



/*
*  todo 在不结合react的情况下的redux 中API的使用情况
*
*
*
*  通createStore(reducer), 进行创建store======>>>>(暴露接口Store)
*       store.subscribe(listener)=======>>>
*             store.dispatch(action返回一个对象)
*
*
*
*
* (1)dispatch(action) =======>>>>>>>>    这里的action返回的是一个对象
*         action.type和或者action.payload,进行改变state,状态
*    前提:这里已经订阅好了subscribe(操作函数),这里自动执行state状态的
*         subscribe(操作函数listener), listener,这里的监听的函数的,通过store.getState.进行获取           状态
*
*(2)
*
*
*
*
* */






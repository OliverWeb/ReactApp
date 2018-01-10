import {createStore} from 'index.redux'
//根据老的state和action生成新的state,代码的库的事件
//createStore();函数库
function couter(state=0,action) {
	switch(action.type){
		case 'a':
			return state+=6;
		default:
			return 10;
	}
}
/*新建store*/
const  store=createStore(couter);       /*新建的store 库*/


/*订阅的事件*/
function listen() {
	const current=store.getState();
	console.log(current);
}
//利用订阅事件进行监控,事件处理里中状态的变化
store.subscribe(listen);
//进行事件处理,派发事件,传递action;
store.dispatch({type:'加机关枪'});   //dispatch(action);



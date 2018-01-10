const  ADD_GUN="加机关枪";
const  REMOVE_GUN='减机关枪';
//reducer,用于 createStore() store.dispatch(counter);
export function counter(state=0,action) {
	switch(action.type){
		case ADD_GUN:
			return state+1;
		case REMOVE_GUN:
			return state-1;
		default:
			return 10
	}
}


//action.createStore 用于的couter=>用户dispatch
export function addGun(){
	return {type:ADD_GUN}
}
export function removeGun(){
	return {type:REMOVE_GUN}
}
export function addGunAsync() {
	//利用applyMiddleware开启thunk中间件,这里返回必须是一个函数
	return dispatch=>{
			setTimeout(()=>{
				dispatch(addGun())    //dispatch(action)  执行的函数的的时候通过dispatch
			},2000);
	}
}

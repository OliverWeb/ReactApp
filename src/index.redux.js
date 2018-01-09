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
	return (dispatch)=>{
			setTimeout(()=>{
				dispatch(addGun())
			},2000);
	}
}

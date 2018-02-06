const thunk =({dispatch,getState})=>next=>action=>{
	/*如果是函数,执行一下,参数dispatch,getState*/
	if(typeof action ==='function'){
		return action(dispatch,getState);
	}
	//默认,什么都没有的干
	return next(action);
};
export default thunk
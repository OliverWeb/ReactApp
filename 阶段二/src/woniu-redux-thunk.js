const thunk=({dispatch,getState})=>next=>action=>{
	//如果是函数,执行一下,参宿是dispatch和getState
	if(typeof action==='function'){
		//这里处理第三种异步情况
		return action(dispatch,getState)
	}
	//next是下一个dispatch
	return next(action)
};
export default thunk


//所有的dispatch 都要通过中间件走一下,才能最终的reducer里面
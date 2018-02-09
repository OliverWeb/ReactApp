const arrayThunk=({dispatch,getState})=>next=>action=>{
	//如果是函数,执行一下,参宿是dispatch和getState
	if(Array.isArray(action)){
		return action.forEach(v=>dispatch(v)
		)
	}
	//如果不符合我们的要求,直接调用下一个中间件,使用next(action)
	// if(typeof action==='function'){
	// 	//这里处理第三种异步情况
	// 	return action(dispatch,getState)
	// }
	//next是下一个dispatch
	return next(action)
};
export default arrayThunk


//所有的dispatch 都要通过中间件走一下,才能最终的reducer里面
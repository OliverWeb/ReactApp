/*
*工具类函数,
* 这里是注册完成的信息
* 对跳转进行处理如何跳转
* */

export function getRedirectPath({type, avatar}) {
	// 根据用户信息获取用户跳转地址
	// user.type  /boss /genius
	// user.avatar //bossinfo /geniusinfo

	let url = (type == 'boos') ? '/boos' : '/genius';
	/*
	* 进行判断是否进行完善信息
	* */
	if (!avatar) {
		url += 'info'
	}
	/*返回boosinfo  或者是geniusinfo*/
	return url;
}

export function getChatId(userId,targetId) {
	return [userId,targetId].sort().join('_');
}


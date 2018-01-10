const mapStatetoProps(state){
	return {num:state}       //将state状态进行强压给num;
}
const  actionCreators={addGun,removeGun};    //这里是所需要的参数,即对应的的函数
//mapStatetoProps和actionCreators是必须的参数, 先执行connect,然后在执行app
App=connect(mapStatetoProps,actionCreators)(App);

export default App
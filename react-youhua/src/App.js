import React from 'react';
import {Map,is} from 'immutable'
//对结构如果是多层
/*
* 1.减少内存使用
* 2.并发安全
* 3.降低项目复杂度
* 4.便于进行比较复杂的数据,定制shouldComponentUpdate方便
* 5.时间旅行功能
* 6.函数式编程
* 缺点:
* 1.学习成本
* 2.库的大小(seamless-immutable)
* 3.对现有项目入侵太严重
* */


let obj=Map({name:1,title:'imooc'});
let obj1=Map({name:1,title:'imooc'});
console.log(is(obj,obj1));

/*let obj={name:2};
let obj1={name:1};
//可用于shouldComponentUpdate()进行返回结果进行判断是否进行执行
//递归的,复杂度太高,react只做浅层对比
function comareObj(obj1,obj2){
	if(obj1===obj2){
		return true
	}
	if(Object.keys(obj1).length!==Object.keys(obj2).length){
		return false
	}
	for(let k in obj1){
		if(obj1[k]!==obj2[k]){
			return false
		}
	}
	return true
}
// console.log(comareObj(obj,obj1));

let obj=Map({
	'name':'imooc',
	'course':Map({'name':'react+redux'})
});
let obj1=obj.set('name','woniu');
console.log(obj.get('course')===obj1.get('course'));
console.log(obj===obj1);*/



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0,
			title:'imooc',
			users:['hello','world','!!!!']
		}
		this.handleClick=this.handleClick.bind(this);
		this.handleTitle=this.handleTitle.bind(this);
	}

	handleClick() {
		this.setState({
			num:this.state.num+1
		});
		console.log(this.state.num);
	}
	handleTitle(){
		this.setState({
			title:this.state.title+'!'
		});
	}

	render() {
		//如果的在onClick记性bind(this)事件会出现,
		//每次渲染render 时候,bind(this)都会进行的一次绑定
		//箭头函数这里的在render后也会生成全新的函数性能也不是特别好
		//尽量使用在constructor进行bind(this)
		return (
			<div>
				<h2>App</h2>
				<button onClick={() => {this.handleClick()}}>{`click${this.state.num}`}
				</button>
				<button onClick={this.handleClick.bind(this)}>Click2</button>
				<button onClick={this.handleClick}>多组件进行测试</button>
				<p>每一次都会生成新的传递对象,这里的传递的对象的,尽量放在constructor进行处理声明</p>
				<p>目的是为了每次传递的时候仅仅传递一个不是每次都进行生成一个进行传递</p>
				<Demo title={this.state.title}/>
				<button onClick={this.handleTitle}>btnTitle</button>
				<ul>
					{this.state.users.map(v=><li key={v}>{v}</li>)}
				</ul>
			</div>
		);
	}
}
/*React.PureComponent 这种极大的提高了渲染的状态*/
class Demo extends React.Component {
	shouldComponentUpdate(nextProps,nextState){
		/*子组件是否进行render处理*/
		if(nextProps.title===this.props.title){
			return false
		}
		return true
	}
	render() {

		console.log('demo render 执行了');
		return <h2> I am demo,属性的{this.props.title}</h2>
	}
}

export default App;


/*
* todo 属性传递的优化
*
* */
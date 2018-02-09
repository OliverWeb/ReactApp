import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware} from './woniu-redux'
import thunk from './woniu-redux-thunk'
import arrThunk from './woniu-redux-array'
import { counter } from './index.redux'
// import { Provider } from 'react-redux';
import { Provider } from './woniu-react-redux';
import App from './App'
// import './01.learn.redux'
// import Page from './context.demo'
// import Demo from "./demo";
// ReactDOM.render(<Page/>,document.getElementById('root'));
/*compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)*/
const store = createStore(counter,applyMiddleware(thunk,arrThunk));
ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root'));


/*
* react,redux,react-redux结合使用
* 1.createStore以及函数,getState,dispatch,subscribe中的来自redux
* 2.react-redux:
*   (1):Provider组件可以将store通说context,供其他的组件进行获取
*
*
*
* */

/*const add =x=>y=>x+y+3;
const res=add(2)(3);
console.log('res is',res);*/

// const obj={name:'蜗牛',type:'react'};
//这里将的obj中的key放在一个数组内
// console.log(Object.keys(obj));

// function sayHello(...args){
//   console.log(args);
// }
// sayHello('','','','');





const add = x=>y=>(x+y+3);
/*嵌套函数如何进行包裹参数*/
const res=add(2)(3);
console.log('res ids',res);

function sayHello(...args) {
	console.log(args);
}
sayHello('hello','React','and','imooc');

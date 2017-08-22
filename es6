1.let命令

1）let和var的区别：let声明的变量只有所在的代码块有效。

2）没有变量的提升，一定要声明后使用。使用let命令声明变量之前，该变量都是不可用的。形成“暂时性死区”。

3）typeof 不再是一个百分之百安全的操作。

2.块级作用域

1）es5和es6比较：es5 只有全局作用域和函数作用域，没有块级作用域。

2）let实际上为javascript新增了块级作用域

3）es6 允许块级作用域的任意嵌套。

4）es5规定函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明，严格模式下会报错。为ES5和es6环境避免报错，应不要在块级作用域里声明函数。

3.const命令

1）const声明一个只读的常量。一旦声明，常量的值就不能改变。const一旦声明变量，就必须立即初始化，不能留到以后赋值。

2）其他特性和let类似

3）对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址。const命令只是保证变量名指向的地址不变，并不保证该地址的数据不变，所以将一个对象声明为常量必须非常小心。


const foo = {};
foo.prop = 123;
 
foo.prop
// 123
 
foo = {};
//常量foo储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。
ES5只有两种声明变量的方法：var命令和function命令。ES6除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6一共有6种声明变量的方法。

4.顶层对象的属性

顶层对象，在浏览器环境指的是window对象，在Node指的是global对象。 ES6规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从ES6开始，全局变量将逐步与顶层对象的属性脱钩。

var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1
 
let b = 1;
window.b // undefined
5.解构赋值

1.数组得解构赋值

1)“模式匹配”为变量赋值；var [a, b, c] = [1, 2, 3];

2) 不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。


let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4
3)解构赋值不仅适用于var命令，也适用于let和const命令，对于Set结构，也可以使用数组的解构赋值。只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。

2.对象的解构赋值

1)对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

var { bar, foo } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"
 
var { baz } = { foo: "aaa", bar: "bbb" };
baz // undefined
2)变量名与属性名不一致，必须写成下面这样。这实际上说明，对象的解构赋值是下面形式的简写。也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

//对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。<br>var { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
 
var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
 
let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'
3)和数组一样，解构也可以用于嵌套结构的对象。


var obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};
 
var { p: [x, { y }] } = obj;
x // "Hello"
y // "World"
//这时p是模式，不是变量，因此不会被赋值
var node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};
 
var { loc: { start: { line }} } = node;
line // 1
loc  // error: loc is undefined
start // error: start is undefined
 
 
let obj = {};
let arr = [];
 
({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
 
obj // {prop:123}
arr // [true]
4)数组本质是特殊的对象，因此可以对数组进行对象属性的解构


var arr = [1, 2, 3];
var {0 : first, [arr.length - 1] : last} = arr;
first // 1
last // 3
3.字符串的解构赋值

1)字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

2)类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。


const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
 
let {length : len} = 'hello';
len // 5
4.数值和布尔值的解构赋值

解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

let {toString: s} = 123;
s === Number.prototype.toString // true
 
let {toString: s} = true;
s === Boolean.prototype.toString // true
 
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError
5.变量得解构赋值用途

1）交换变量的值。 

1
[x,y]=[y,x];
2)从函数返回多个值

3)函数参数的定义，解构赋值可以方便地将一组参数与变量名对应起来。

// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);
 
// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});
4)提取json数据，解构赋值对提取json对象中的数据，尤其有用。

var jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
 
let { id, status, data: number } = jsonData;
 
console.log(id, status, number);
// 42, "OK", [867, 5309]
 
//可以快速提取json中的数据的值。
5）函数参数的默认值

jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
}) {
  // ... do stuff
};
6)遍历map结构

任何部署了Iterator接口的对象，都可以用for...of循环遍历。Map结构原生支持Iterator接口，配合变量的解构赋值，获取键名和键值就非常方便。

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
 
for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
 
// 获取键名
for (let [key] of map) {
  // ...
}
 
// 获取键值
for (let [,value] of map) {
  // ...
}

/*forEach()
// forEach()方法需要一个函数作为参数
// 像这种函数，由我们创建但是不由我们调用的，称为回调函数
// 数组中有几个元素就会去执行几次，每次执行时，浏览器会遍历到的元素以实参的形式传递进来，我们可以来定义形参，来读取这些内容
// 浏览器会在回调函数中传递三个参数，第一个参数，就是当前正在遍历的元素；第二个参数就是当前遍历的元素的索引，第三个参数就是正在遍历的数组

var arr = ["孙悟空","猪八戒","沙和尚","唐僧","白骨精"];



arr.forEach(function(value, index, obj){
console.log("hello")
})



var arr = ["孙悟空","猪八戒","沙和尚","唐僧","白骨精"];

//slice()，可以用来从数组


var arr = [1,2,3,2,2,1,3,4,2,5];

for(var i=0; i<arr.length; i++){
// console.log(arr[i]);
for (var j=i+1; j<arr.length; j++){
// console.log(arr[j]);
// 判断两个元素的值是否相等
if(arr[i] == arr[j]){
    arr.splice(j,1);
    j--;
}
}
}
console.log(arr);



//concat()可以连接或者多个数组，并返回新的数组;该方法不会对原数组产生影响
var arr = ["孙悟空","猪八戒"];
var arr2 = ["蜘蛛精","白骨精"];
var result = arr.concat(arr2);

console.log(result)


// join(),该方法可以将数组转换为一个字符串

result = arr.join();

console.log(result);

arr.reverse()
arr.sort()

// call()和apply()，这两个方法都是函数对象的方法，需要通过函数对象来调用
// 当对函数调用call()和apply()都会调用函数执行
// 在调用call和apply()可以将一个对象指定为第一个参数，此时这个对象将会成为函数执行时的this
// call()方法可以将实参在对象之后依次传递
// apply()方法需要将实参封装到一个数组中统一传递
// this的情况
// 1.以函数形式调用时，this永远都是window
// 2.以方法的形式调用时，this是调用方法的对象
// 3.以构造函数形式调用时，this是新创建的那个对象
// 4.使用call和apply调用时，this是指定的那个对象；
function fun(a,b){
console.log(a);
console.log(b);
}

// fun.call(obj,2,3);
fun.apply(obj,[2,3]);
// fun.apply()
// fun.call()
// fun()
var obj ={
    name:"obj",
    sayName:function(){
        alert(this.name);
    }
};
var obj2 ={name:"obj2"};

// fun.call(obj);
fun.apply(obj2);
obj.sayName.apply(obj2)
*/

/*
封装实参的对象arguments
arguments是一个类数组对象，它也可以通过索引来操作数据，也可以获取长度
在调用函数时，我们所传递的实参都会在arguments中保存
arguments.length可以用来获取实参的长度
我们即使不定义形参，也可以通过arguments来使用实参，只不过比较麻烦
arguments[0]表示第一个实参
arguments[1]表示第二个实参
它里面有一个属性叫做callee，这个属性对应一个函数对象，就是当前正字执行的函数对象



function fun(a,b){
    console.log(arguments instanceof Array);
    console.log(Array.isArray(arguments));
    console.log(arguments.length)
    console.log(arguments[1]);
    console.log(arguments.callee == fun);
}
fun("hello",true);
*/

/* Date对象
- 在JS中使用Date对象来表示一个时间
- 如果直接使用构造函数创建一个Date对象，则会封装当前代码的执行的时间



var d = new Date();
console.log(d);

//创建一个指定的时间对象
// 需要再构建函数中传递一个标时间的字符串作为参数
// 日期的格式 月份/日/年 时：分：秒
// getdate,获取对象是几号
// getday，周几
// getmonth,月份。 0表示1月，11表示12月



var d2 = new Date("12/03/2016");
console.log(d2)

var date = d2.getDate()
console.log(date)

var day =d2.getDay();
console.log(day)

var month= d2.getMonth()
console.log(month)


var start = Date.now();
for(var i=0; i<100; i++){
    console.log(i)
}
var end = Date.now();
console.log("执行了，" + (end - start) + "毫秒");


//math, 工具类，不用创建对象，里面封装了数学相关的属性和方法
// Math.abs(),绝对值
// Math.ceil(),向上取整，小数位只要有值就自动进1
// Math.floor(),向下取整
// Math.round(),四舍五入
// Math.random()，0-1之间的随机数
// max(),获取多个数中的最大值
// Math.pow(x,y),返回x的y次幂
// Math.sqrt()，开方
console.log(Math.PI)
console.log(Math.abs(-1))
console.log(Math.ceil(1.5))
console.log(Math.floor(1.6))
console.log(Math.round(1.5))
console.log(Math.random())
var max = Math.max(1,2,3,4);
console.log(max);
*/

// 包装类
// String()
// Number()
// Boolean()


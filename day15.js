/* 数组，也是一个对象，和普通对象功能类似，也是用来存储一些值
不同的是普通对象是使用字符串作为属性名，而数组使用数字作为索引操作元素

向数组中添加元素
语法：数组【索引】=至

读取数组中的元素
语法：数组【索引】

获取数组的长度
length属性获取数组长度
语法：数组。length
对于非连续的数组，长度等于最大数组+1

修改length




var arr = new Array();

//console.log(typeof arr);

arr[0] = 10;
arr[1] = 22;
arr[2] = 33;
arr[10] = 100;
console.log(arr[2]);
console.log(arr.length)
arr.length = 10 ;

console.log(arr);

//向数组最后位子添加元素

arr[arr.length] = 70;
arr[arr.length] = 80;
arr[arr.length] = 90;

console.log(arr);



//使用字面量创建素组
// 语法：[]
var arr = [];

// 使用字面量创建数组时，可以在创建时就指定数组中的元素

var arr = [1,2,3,4,5,6];
// console.log(arr);
// console.log(arr.length);

var arr2 = new Array(10,20,30); //构造函数创建数组

// 创建一个长度为10的数组
arr2 = new Array(10);

//数组中的元素可以是任意的数据类型
arr = ["hello",1, true, null,undefined];
// console.log(arr);

// 也可以是对象
var obj = {name:"孙悟空"};
arr[arr.length] = obj;

console.log(arr);
console.log(arr[5].name);

// 也可以是个函数
arr = [function(){},function(){}];
console.log(arr);

// 数组中也可以是数组，如下是二维数组，三维、四维。。。。

arr = [[1,2,3],[4,5,6],[7,8,9]]

arr.pop()； //删除最后一个元素返回
arr.unshift(); // 在数组开头添加元素
arr.shift()；//删除数组的第一个元素，并返回该元素



//数组的遍历,遍历数组就是将所有的元素取出来

var arr = ["孙悟空", '猪八戒', "沙和尚"];

for (var i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

*/


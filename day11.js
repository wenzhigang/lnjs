/*
var obj = new Object();

obj.name = "孙悟空";
obj.age = 18;

obj.sayName = function(){
console.log(obj.name);
}

//console.log(obj.sayName);
obj.sayName();


//如果一个函数作为一个对象的属性保存，那么称这个函数是这个对象的方法，调用函数就说调用对象的方法

var obj2 = {
    name:"猪八戒",
    age:18,
    sayName:function(){
        console.log(obj2.name);
    }
}
obj2.sayName();




//枚举对象中的属性
//使用for 。。。 in 语句
// 语法
//for(var 变量 in 对象){

//}


var obj = {
    name: "孙悟空",
    age: 18,
    gender:"男",
    address:"花果山"
};

for(var n in obj){
    console.log(obj["n"])

}



//作用域:全局作用域，函数作用域

var a = 10;
var b = "hello";
c = true;
function fun(){
    alert("hello")
}

var d = 35;

*/

function fun(a,b){
    console.log(a,b);
    console.log(this);
}
fun();

var obj = {
    name:"孙悟空",
    sayName:fun
};
//console.log(obj.sayName == fun);

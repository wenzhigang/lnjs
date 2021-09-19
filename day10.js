//break和continue

/*
outer:
for (var i=0; i<5; i++){
    console.log("外循环"+i)
    for (var j=0; j<5; j++){
        break outer;
        console.log("内层循环"+j);
    }
}


for (var i=0 ; i<5; i++){
    if (i ==2){
        continue;
    }
        console.log(i);
    
}



console.time("test");

for (var i=0; i<500; i++){
    console.log("外循环"+i)
    for (var j=0; j<500; j++){
        console.log("内层循环"+j);
    }
}


console.timeEnd("test")

*/

//对象，内建对象，宿主对象，自定义对象

//语法：对象。属性名 = 属性值；
//读取：对象.属相名
//修改：对象.属性名 = 新值
//删除：delete 对象.属性名
/*
var obj = new Object();

console.log(typeof obj);

obj.name = "孙悟空";
obj.gender = "男";
obj.age = "18";

obj.age = "500"
delete obj.name

console.log(obj.name);



//对象的属性名不强制要求遵循标识符的规范
//语法：对象【”属性名“】= 属性值
//在【】中可以直接传递一个变量，这样变量值是多少就会读取这个属性
var obj = new Object();
obj.name = "孙悟空";
obj.var = "hello";
obj["123"] = 789

var n = "123"

obj.test = "hello"
//console.log(obj[n]);

var obj2 = new Object();
obj2.name = "猪八戒";

obj.test = obj2;

//console.log(obj.test.name)
//in 运算符
//通过该运算符可以检查一个对象中是否含有指定的属性
//语法： ”属性名“ in 对象
//
console.log("name" in obj);



var a = 123;
var b = a;
a++;
//console.log("a = "+a);
//console.log("b = "+b);

var obj = new Object();
obj.name = "孙悟空";

var obj2 = obj;

obj.name = "猪八戒"

console.log(obj.name);
console.log(obj2.name);



//使用对象字面量创建一个对象
// var obj = new Object()
var obj = {};
obj.name = "孙悟空"
//console.log(obj.name);

//语法

var obj2 = {name:"猪八戒",
age:28, 
gender:"男",
test:{name:"沙和尚"}
};
console.log(obj2.test);


//函数是个啥玩意，也是一个对象，函数中可以封装一些功能（代码），需要的时候可以执行
//调用函数 语法：函数对象（）
var fun = new Function("console.log('第一个函数');");
fun();
fun();



//语法： function 函数名（[形参1，形参2....形参N]）{
//    语句...
//}

function fun2(){
       console.log("第二个函数");
}
fun2();


var fun3 = function(){
    console.log("我是匿名函数中的代码");
}
fun3()


//可以在函数的（）中来指定一个或多个形参（形式参数）
function sum(a,b){
    
    console.log(a+b);
}
sum(2,2,3);



function sum(a, b, c){
          //console.log(a+b+c);
          var d = a + b +c;

          return d;


        }
var result = sum(4,5,6);
console.log(result);


function isOu(num){
   return num % 2 == 0;

}
var result = isOu(25);
console.log(result);



function mianji(r){
   return  3.14*r*r;

}
result = mianji(10);
console.log(result);

*/
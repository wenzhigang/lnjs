/*构造函数
//创建一个构造函数，专门用来创建Person对象
//首字母大写
//构造函数和普通函数的区别就是调用方式不同
//普通函数直接调用，而构造函数需要使用new关键字调用
//构造函数的执行流程：
1.立刻创建一个新的对象
2.将新建的对象设置为函数中this,在构造函数中可以使用this来引用新建的对象
3.逐行执行函数的代码
4.将新建的对象作为返回值返回

使用同一个构造函数创建的对象，称为一类对象，也将一个构造函数称为一个类
将通过一个构造函数创建的对象，称为是该类的实例

function Person(name, age, gender){
    this.name = name;
    this.age = 18;
    this.gender = gender
    this.sysName = function(){
        alert(this.name);
    };

}


var per = new Person("孙悟空",18, "男");
var per2 = new Person("玉兔精",10,"女");
var per3 = new Person("玉兔精2",20,"女");

//console.log(per2);
//console.log(per3);
//使用instanceof可以检查一个对象是否是一个类的实例
//console.log(per instanceof Person);
//所有的对象都是Object的后代。任何对象和Object做instanceof检查都会返回true
console.log(dog instanceof Object);

*/

//原型， prototype
/*原型prototype
*
创建的每一个函数，解析器都会向函数中添加一个属性prototype，属性对应着一个对象，这个对象就是所谓的原型对象

如果函数作为普通函数调用prototype没有任何作用
当函数通过构造函数调用，它所创建的对象中都会有一个隐函数型，指向该构造函数的原型对象，通过_proto_来访问该属性
原型对象就像一个公共的区域，所有同一个类的实例都可以访问到这个原型对象
我们可以将对象中共有的内容，统一设置到原型对象中
当访问对象的一个属性或方法时，它会现在自身的对象中寻找，如果有则直接使用。如果没有则会去原型对象中寻找，如果找到则直接使用
以后创建构造函数时，可以将这些对象的共有的属性和方法，统一添加到构造函数的原型对象中，这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法

function MyClass(){

}
//向MyClass的原型中添加属性a
MyClass.prototype.a = 123;

//
向MyClass的原型中添加一个方法
MyClass.prototype.sayHello = function(){
    alert("sayHello")
}

var mc = new MyClass();
//console.log(mc.__proto__ == MyClass.prototype);
console.log(mc.a);
*/

/*
创建一个构造函数



function MyClass(){

}
MyClass.prototype.name = "我是原型中的名字";

var mc = new MyClass();
mc.age = 18;
//console.log(mc.name);
//console.log("name" in mc);
//可以使用对象的hasOwnproperty()来检查对象自身中是否含有该属性
//使用该方法只有当对象自身中含有属性时，才会返回true
console.log(mc.hasOwnProperty("age"));

*/

function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;

}

var per = new Person("孙悟空", 18, "男");
var result = per.toString();
//console.log(result);
console.log(per.__proto__.__proto__.hasOwnProperty("toString"));
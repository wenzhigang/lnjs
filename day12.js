
/*
//使用工厂方法创建对象,大批量创建对象

function createPerson(name,age,gender){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.gender = gender;
    obj.sayName = function(){
        alert(this.name);
    };
    return obj;

}

var obj2 = createPerson("猪八戒",18,"男”);
var obj3 = createPerson("白骨精”,16,“女”);

obj2.sayName();

//console.log(obj2);
//console.log(obj3);


function createDog(name, age){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayHello = function(){
        alert("旺旺~~");

    }
    return obj;
}

var dog = createDog("旺财",3);

console.log(dog);


*/

//构造函数


var obj = new personal();
var obj2 = new
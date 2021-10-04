/* 字符串
// 字符串是以字符数组形式保存的
// ["h","e","l".....] hello world
var str = "hello world";
console.log(str.length);
console.log(str[2]);

// chartAt(),返回指定位置的字符

var result = str.charAt(6);   // str[0]更好
console.log(result)

// charCodeAt()

result = str.charCodeAt(0);
console.log(result);

// String.fromCharCode()，可以根据字符编码去获取字符
result = String.fromCharCode(20025);
console.log(result)

// concat()，可以用来链接两个或多个字符串，作用和+一样
result = str.concat("你好","再见")
console.log(result)

// indexof()，检索字符串是否含有指定内容，如果含有该内容，则会返回其第一次出现的位置，如果没找到则返回-1

str = "hello wolrd";
result = str.indexOf("h",0);
console.log(result);

// lastIndexOf(),该方法和index()一样， index()从前往后找，lastIndexOf()从后往前找，也可以指定起始查找的位置

str = "hello wolrd";
result = str.indexOf("h",0);
result = str.lastIndexOf("h");
console.log(result);

// slice()，可以从字符串中截取指定的内容，不影响原数组，返回截取的内容；也可以传递负数，从倒数开始

str = "dagrrhahdfgfd"

result = str.slice(1,6)
result = str.slice(1)
result = str.slice(1,-1)
console.log(result)

// substring()，可以截取一个字符串，和slice()类似，不同的是不能传负数.而且自动调整参数的位置，第二个参数小于第一个参数，则调换。

result = str.substring(1,5)
console.log(result)



//split(),拆分数组,需要一个参数，根据该参数去拆分数组。 如果传递一个空串，则会将每个字符都拆分为一个元素

str = "abc, bcd, efg, ogf";
result = str.split(",");

console.log(result)


// toUpperCase()，全部换为大写，不会影响原字符串
// toLowerCase

str = "abdcfdfdsd";
result = str.toUpperCase();
result = str.toLowerCase()
console.log(result)



// 正则表达式
// - admin
// -admin@hotmail.com
//  用于定义一些字符串的规则，计算机根据正则表达式来检查一个字符串是否符合规则
// 或者将符合规则的内容提取出来

// 创建正则表达式的对象
// 语法：
// var 变量 = new RegExp("正则表达式"，“匹配模式”;)
// 在构造函数中可以传递一个匹配模式作为第二个参数，i 忽略大小写， g 全局模式匹配。

var reg = new RegExp("a","i");
var str = "a"
// console.log(reg)
// 正则表达式检查的方法：
// test()，有则true，无则false

var result = reg.test(str);
console.log(result)
console.log(reg.test("Abcd"))

*/
// 使用字面量来创建正则表达式。
// 语法：var 变量 = /正则表达式/表达式
// var reg = new RegExp("a","i");
reg = /a/i
// console.log(reg.test("abc"))

// 创建一个正则表达式，检查字符串中是否有a或者b
// 使用|表示或者
reg = /a|b/;

console.log(reg.test("a"))

// 创建一个正则表达式检查一个字符串中是否有字母
//reg = /a|b|c|d|e|f/;
// [ab] == a|b
// [A-Z]任意大写字母
// [A-z]任意字母
// [0-9]任意的数字
// []里的内容也是或的关系
reg = /[abcdefg]/
reg = /[a-z]/  //任意的小写字母
// console.log(reg.test("abcd"));

// 检查一个字符串中是否含有abc或adc或aec

//reg = /abc|adc|aec/
reg = /a[bde]c/

    console.log(reg.test("aec"))

    // [^ ] 除了
reg = /[^ab]/
console.log(reg.test("efdsf"))

reg = /[0-9]/;
console.log(reg.test("123"))
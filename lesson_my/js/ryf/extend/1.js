
//定义了（封装） 了人这个类
// 两种类的封装写法
//js 正宗写法  效果一样的
//es5   基于对象的原型样式
//
let obj={

}//Object (构造函数) Object.prototype  new Object()
// obj.__proto__   //这个对象的原型

function Person(){

    this.name=name;
    this.age=age;
}
//函数都有一个protype  对象
//函数也是对象 Person()
Person.prototype={
    sayHi(){
        console.log('hello');
    }
}
//es6+ 面向对象式，传统的Java，c++ class 关键字
class Person{
    constructor(name,age){
        
    this.name=name;
    this.age=age;
    }
    sayHi(){
        console.log('hello')
    }
}
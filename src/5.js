/*
 * 构造函数、原型与原型链的关系
 */

//构造函数Foo
function Foo(){}  

//构造函数Foo的原型对象Foo.prototype
Foo.prototype  

//原型对象Foo.prototype的属性constructor指向构造函数Foo
Foo.prototype.constructor === Foo  

//原型对象Foo.prototype的属性__proto__指向它上一层原型
Foo.prototype.__proto__  === Object.prototype  

//原型链最顶层
Object.prototype.__proto__ === null

/*
 * new实例化一个对象与直接调用一个函数有什么区别
 */

function Test() {  
    this.name = "test" 
    //return "test"
}

var test1 = new Test()   //Object 对象，它有一个name 属性，并且返回一个字符串test  
var test2 = Test()    // 函数Test()属于Function对象   这个test2，它单纯是一个字符串 

console.log(test1)
console.log(test2)

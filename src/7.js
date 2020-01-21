/*
 * 闭包的一个简单例子 
 */

function outer(){
    var a = 1
    return function() {
        return a
    }
}
var b = outer()()  //因为return了一个函数，所以下面要调用两次
console.log(b)  //1


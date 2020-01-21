/*
 * 闭包的简单例子 
 */

function outer(){
    var a = 1
    return function() {
        return a
    }
}
var b = outer()()  //因为return了一个函数，所以下面要调用两次
console.log(b)  //1

for (var i=1;i<=5;i++){
    console.log('d:'+i)  //1,2,3,4,5
}

for (var i=1;i<=5;i++){
    setTimeout(function timer(){
        console.log('a:'+i)  //每隔一秒，打印6出来（全是6）
    }, i*1000)
}

for (var i=1;i<=5;i++){
    (function(i){
        setTimeout(function timer(){
            console.log('b:'+i)  //每隔一秒，分别打印出1,2,3,4,5
        }, i*1000)
    })(i)
}

for (var i=1;i<=5;i++){ 
    setTimeout((function(i){
        return function(){
            console.log('c:'+i)  //每隔一秒，分别打印出1,2,3,4,5
        }
    })(i), i*1000)
}

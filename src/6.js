/*
 * 作用域链的一个简单例子 
 */

let a = 1
function fn(){
    let b = 2
    function fn1(){
        let c = 3
        console.log(c)  //输出3，fn1
        console.log(b)  //输出2，fn1 => fn
        console.log(a)  //输出1，fn1 => fn => window
    }
    fn1()
}
fn()




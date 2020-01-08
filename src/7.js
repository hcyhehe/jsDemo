/*
 * 闭包的一个简单例子 
 */

function aaa(){
    let name = 'xixi'
    let fun = function bbb(){
        return name
    }
}

function ccc(){
    let aaaValue = aaa.fun
    console.log(aaaValue)
}
ccc()

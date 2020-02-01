
//执行顺序：外宏1 --> 外宏2 --> 外宏3 --> 微3 -->  微(1,2) --> 内宏1
setTimeout(() => { //创建宏任务
    //执行后，回调一个宏事件，放在宏事件队列的末尾
    console.log('内宏1')
}, 0)
console.log('外宏1')  

new Promise((resolve) => {
    console.log('外宏2')
    //虽然resolve调用了，执行了但是整体代码还没执行完，无法进入Promise.then 流程
    resolve()
}).then(() => {
    console.log('微1')
}).then(()=>{
    console.log('微2')
})

process.nextTick(function(){  //创建微任务
    console.log('微3')  //当外部宏执行完毕之后，开始执行微任务
})

console.log('外宏3')  

//宏任务和微任务
setTimeout(() => {
    console.log('3')
}, 0)
console.log('1');

new Promise((resolve) => {
    console.log('1.1');
    resolve()
}).then(() => {
    console.log('2');
}).then(()=>{
    console.log('2.1')
})
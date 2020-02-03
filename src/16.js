//直接打印10个10
for(var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}
//依次打印0-9
for(let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}
//延迟3秒，然后依次打印0-9
for(let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 3000)
}
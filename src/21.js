//catch没有捕捉到异常
new Promise((resolve, reject)=>{
    //throw new Error('bye')
    console.log(asdf)
    reject('11111111')
}).then(()=>{
    console.log('this is then')
}).catch(error=>{
    console.log('Error1:',error.message) //没有打印
})

//catch可以捕捉到异常
// new Promise(()=>{
//     console.log('nonono')
// }).then(()=>{
//     //throw new Error('bye')
//     console.log(asdf)
// }).catch(error=>{
//     console.log('Error2:',error.message) //打印
// })

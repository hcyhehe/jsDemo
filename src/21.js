//catch没有捕捉到异常
new Promise(()=>{
    throw new Error('bye')
}).then(()=>{
    console.log('this is then')
}).catch(error=>{
    console.log('Error:',error.message) //没有打印
})

//catch可以捕捉到异常
new Promise(()=>{
    console.log('nonono')
}).then(()=>{
    throw new Error('bye')
}).catch(error=>{
    console.log('Error:',error.message) //打印
})

let a = 1
function recursion(){
    if(a<100){
        setTimeout(()=>{
            console.log(a)
            a++
            recursion()
        }, 50)
    } else {
        console.log(a)
        console.log('over')
    }
}

recursion()

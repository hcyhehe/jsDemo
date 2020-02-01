//生成指定范围的的随机数
function randomNum(minNum, maxNum){ 
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
} 
let ran = randomNum(0, 3)
console.log(ran)

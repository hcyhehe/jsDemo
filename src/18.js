//冒泡排序
function sort(arr) {
    for(let i=0;i<arr.length;i++){
        //每1轮循环过后，数量总共少i个，加上最后一轮不用比较，所以 -i-1
        for(let j=0;j<arr.length-i-1;j++){  
            let tmp = arr[j]  //设置一个中间量，用于交换
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }
    return arr
}
let arr = sort([3,5,4,2,6,9,7,8,1,0])
console.log(arr)   // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

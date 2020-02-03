// var total = [ 0, 1, 2, 3 ].reduce(( acc, cur ) => {
//     console.log(acc, cur)
//     return acc + cur
// }, 0)
// console.log(total)   // 6


// var array = [[1, 2], [3, 4], [5, 6]].reduce(( acc, cur ) => {
//     console.log(acc, cur)
//     return acc.concat(cur)
// }, [])
// console.log(array)  // [ 0, 1, 3, 4, 5, 6 ]

const arr = [1, 2, 3]
let result = arr.reduce(function(val, item, index, origin) {
    console.log(val, item, index, origin)
    return val + item
}, 0)
console.log(result)


console.log(...new Set([1,2,3,4,5,2,4,1]))
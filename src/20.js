//暂时性死区
let aa = 1
const bb = 2
var cc = 3
console.log(window.aa)  //undefined
console.log(window.bb)  //undefined
console.log(window.cc)  //3
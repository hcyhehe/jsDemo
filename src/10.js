//深拷贝
let a = {name:'Jack'}
let b = a
a.name = 'John'
console.log(b)  //打印 { name: 'John' }

let c = {name:'Jay'}
let d = c
d.name = 'Peter'
console.log(d)  //打印 { name: 'Peter' }

let e = {name:'Lily'}
let f = e
e = null
console.log(f)  //打印 {name:'Lily'}

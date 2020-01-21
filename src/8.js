/*
* this的指向
*/

//直接打印
console.log(this) //window

//function声明函数
function bar () {console.log(this)}
bar() //window

//对象方法调用
var person = {
    run: function (){console.log(this)}
}
person.run() // person

//事件绑定
var btn = document.querySelector("button")
    btn.onclick = function () {
    console.log(this) // btn
}

//$.ajax（obj），this指向obj,在obj中this指向window

//不使用new指向window
function Person(name) {
    console.log(this) // window
    this.name = name;
}
Person('inwe')
//使用new
function Person(name) {
    this.name = name
    console.log(this) //people
    self = this
}
var people = new Person('iwen')
console.log(self === people) //true
//这里new改变了this指向，将this由window指向Person的实例对象people


//箭头函数
var obj = {
    foo(){
      console.log(this)
    },
    bar: ()=>{
      console.log(this)
    }
}

obj.foo() // {foo: ƒ, bar: ƒ}
obj.bar() // window


//箭头函数
var str = 'window'  //let,const定义的变量，不是绑定在window下
 
const obj1 = {
    str:'obj1',
    fn: ()=>{
	    console.log(this.str)  //打印 window
    }
}
obj1.fn()

const obj2 = {
    str:'obj2',
    fn: function(){  //这里的this指向obj2这个对象本身
	    console.log(this.str)  //打印 obj2
    }
}
obj2.fn()
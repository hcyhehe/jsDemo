var a = function(){  //this指向window
    console.log(this)
}
a()
function b(){  //this指向window
    console.log(this)
}
b()

var obj = {
    name: 'obj',
    console: function(){
        console.log(this)  //this指向这个obj
    }
}
obj.console()

var myfunc = function(a){  //构造器调用模式
　　this.a = a;
}
myfunc.prototype = {
　　show:function(){
        alert(this.a)
    }
}
var newfunc = new myfunc("123123123")
newfunc.show()


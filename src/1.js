var name = 'Jack'
var age = 18
var obj = {
    name: 'John',
    objAge: this.age,  
    console: function(place1, place2){
        //这里的this默认指向obj
        console.log(this.name, this.age, place1, place2)  
    }
}

obj.console()
//John undefined undefined undefined

obj.console.call({name:'Jay', age:19}, '广州', '上海')
//Jay 19 广州 上海

obj.console.apply({name:'William', age:20}, ['北京', '杭州'])
//William 20 北京 杭州

obj.console.bind({name:'Jackson', age:21}, '深圳', '广州')()
//Jackson 21 深圳 广州

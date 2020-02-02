//原生继承
function Animal() {
    this.eat = function() {
        console.log('animal eat')
    }
}
function Dog() {
    this.break = function() {
        console.log('dog break')
    }
}
Dog.prototype = new Animal()

var hashiqi = new Dog() //哈士奇
hashiqi.break()
hashiqi.eat()


//Class继承
class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(this.name + 'eat')
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    say() {
        console.log(this.name + 'say')
    }
}
const dog = new Dog('哈士奇')
dog.say()
dog.eat()


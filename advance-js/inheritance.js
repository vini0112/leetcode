
// basic inheritance

const basic = {
    name: "ali",
    method: () => {
        return `my name is ${this.name}`
    }
}
// console.log(basic.method())


// USING Object.create()

const parent = {
    
    method: () =>{
        return `vini`
    }
}

const child = Object.create(parent) // child inherits from parent
// console.log(child.method())


// Constructor Function Inheritance
function inher(name, age){
    this.name = name,
    this.age = age
}

inher.prototype.greet = function(){
    return `my name is ${this.name} i'm ${this.age}`
}

const newPerson = new inher('vinicius', 20)
console.log(newPerson.greet())


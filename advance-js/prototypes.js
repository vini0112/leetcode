// constructor
function persona(nome, idade){
    this.nome = nome,
    this.idade = idade
}

// adding prototype to display it
persona.prototype.greet = function(){
    return `Hello, my name is ${this.nome}`
}

// new person
const person1 = new persona('vini', 13)
const person2 = new persona('lua', 18)

// console.log(person1.greet())
// console.log(person2.greet())


// CHAIN




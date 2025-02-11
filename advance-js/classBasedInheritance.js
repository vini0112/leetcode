// CLASS BASED INHERITANCE

class person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greet(){
        return `My name is ${this.name} and i'm ${this.age}`
    }
}

// const persona = new person('Vini', 20)
// console.log(persona.greet())


// using extends!!
class job extends person{
    constructor(name, age, job){
        super(name, age) // calling for parent constructor
        this.job = job
    }

    employee(){
        return `My name is ${this.name} I work as a ${this.job} for ${this.age} years!`
    }
}

const newEmployee = new job('Vin', 5, 'Software engineer') 
// newEmployee is an instance of job

console.log(newEmployee.employee())


function talk(){
    return `i'm ${this.name}`
}

const me = {
    name: 'vini',
    talk
}
// console.log(me.talk())
// obs -> in the function talk, this. becomes me!
const you = {
    name: 'vinicius'
}

// let your = talk.call(you)
// console.log(your)


// IN THE CONTRUCTOR FUNCTION 

// function person(n){
//     this.name = n
//     this.talk = function(){
//         console.log(this, ' <--') 
//     }
    
// }

// const v = new person('vini')
// console.log(v.talk())


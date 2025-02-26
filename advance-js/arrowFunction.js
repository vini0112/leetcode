

// EXAMPLE OF WHY ARROW FUNCTIONS DON'T WORK IN OBJECT METHODS
// ARROW FUNCTIONS DON'T BIND (THIS)
const me = {
    name: 'vini',
    talk: function(){
        return `i'm ${this.name}`
    },
    arrowTalk: () => {
        return `i'm ${this.name}`
    }
}

// console.log(me.arrowTalk())

function person(n){
    this.name = n
}
person.prototype.talk = function(){
    return this
}
const my = new person('vini')
console.log(my.talk())


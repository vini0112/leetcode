

class Hashtable{
    constructor(size){
        this.table = new Array(size) // creating an array with a determine size
        this.size = size
    }


    hash(key){
        let total = 0
        for(let i = 0;i < key.length;i++){
            total += key.charCodeAt(i) //Convert characters to numeric values
        }
        return total % this.size // Ensure the index is within bounds
    }

    set(key, value){
        const index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }
        this.table[index].push([key, value])
    }

    get(key){
        const index = this.hash(key)
        console.log(this.table[index])
        
    }

    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
    }

    display(){
        for(let i = 0;i < this.table.length;i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }


}

const table = new Hashtable(50)

table.set('name', 'vinicius')
console.log(table.get('name'))
// table.display()

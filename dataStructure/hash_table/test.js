
class HashTable{
    constructor(size){
        this.tables = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i = 0;i < key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        const index = this.hash(key)
        const bucket = this.tables[index]
        if(!bucket){
            this.tables[index] = [[key, value]]
        }else{
            // obs index is stored at 0 and value at 1 
            const sameKeyItem = bucket.find(item => item[0] === key) 
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key, value])
            }
        }

    }

    delete(key){
        const index = this.hash(key)
        const bucket = this.tables[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.tables[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }


    display(){
        for(let i = 0;i < this.tables.length;i++){
            if(this.tables[i]){
                console.log(i, this.tables[i])
            }
        }
    }

}

const hs = new HashTable(10)

hs.set('name', 'vina')
hs.set('mane', 'ni')

// hs.get('name')
hs.display()

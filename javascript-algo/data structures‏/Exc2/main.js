class UniqueArray {
    constructor() {
        this.items = []
        this.seen = new Set();
    }

    add(item) {
        if(!this.exists(item)) {
            if (typeof item !== 'object' || item === null) {
                this.seen.add(item);
            }

            this.items.push(item);
        }
    }

    showAll() {
        console.log(this.items);
    }

    exists(item) {        
        if (typeof item === 'object' && item !== null) {
            for (let existingItem of this.items) {
                if (JSON.stringify(existingItem) === JSON.stringify(item)) {
                    return true;
                }
            }
            return false;
        }

        return this.seen.has(item);
    }

    get(index) {
        if (0 <= index && index < this.items.length){
            return this.items[index];
        }

        return -1;
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add(4)
uniqueStuff.showAll() //prints ["toy", 4]
console.log(uniqueStuff.exists("toy")) //returns true
console.log(uniqueStuff.exists("car")) //returns false
console.log(uniqueStuff.get(67687))
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"

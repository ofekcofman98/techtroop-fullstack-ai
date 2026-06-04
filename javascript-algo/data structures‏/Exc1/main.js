class UniqueArray {
    constructor() {
        this.items = []
        this.seen = new Set();
    }

    add(item) {
        if(!this.exists(item)) {
            this.seen.add(item);
            this.items.push(item);
        }
    }

    showAll() {
        for (let item of this.items) {
            console.log(item);
        }
    }

    exists(item) {
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
console.log(uniqueStuff.exists("toy")) //returns true
console.log(uniqueStuff.exists("car")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"

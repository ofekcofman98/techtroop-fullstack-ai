class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(val) {
        if (this.value === val) {
            return true;
        }

        if (val < this.value) {
            if (this.leftChild) {
                return this.leftChild.findNode(val);
            } 

            return false;
        }
        else {
            if (this.rightChild) {
                return this.rightChild.findNode(val);
            } 

            return false;
        }

    }

    findCommonParent(val1, val2) {
        if (this.value > val1 && this.value > val2) {
            if(this.leftChild) {
                return this.leftChild.findCommonParent(val1, val2);
            }
        }

        else if (this.value < val1 && this.value < val2) {
            if(this.rightChild) {
                return this.rightChild.findCommonParent(val1, val2);
            }
        }

        else {
            return this.value;
        }
    }

}

console.log("############### Test for Exc1: ###############")
const bSTree1 = new BSNode("H");

bSTree1.insertNode("E");
bSTree1.insertNode("S");
bSTree1.insertNode("G");
bSTree1.insertNode("L");
bSTree1.insertNode("Y");
bSTree1.insertNode("I");

console.log(bSTree1.findNode("H")); // true
console.log(bSTree1.findNode("G")); // true
console.log(bSTree1.findNode("Z")); // false
console.log(bSTree1.findNode("F")); // false
console.log(bSTree1.findNode("y")); // false
console.log(bSTree1.findNode("L")); // true

console.log("############### Test for Exc2: ###############")
const bsTree2 = new BSNode("J");

bsTree2.insertNode("H");
bsTree2.insertNode("R");
bsTree2.insertNode("E");
bsTree2.insertNode("S");
bsTree2.insertNode("P");
bsTree2.insertNode("G");
bsTree2.insertNode("B");
bsTree2.insertNode("L");
bsTree2.insertNode("Y");
bsTree2.insertNode("I");

console.log(bsTree2.findCommonParent("B", "I")); // "H"
console.log(bsTree2.findCommonParent("B", "G")); // "E"
console.log(bsTree2.findCommonParent("B", "L")); // "J"
console.log(bsTree2.findCommonParent("L", "Y")); // "R"
console.log(bsTree2.findCommonParent("E", "H")); // "H"
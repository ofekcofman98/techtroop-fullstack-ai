class Exercises {
    
    //should return true if n is even, false otherwise
    isEven(n) {
        return n % 2 == 0 ? true : false
    }


    //should remove at least one element from the array `arr`
    removeAtLeastOne(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
                return [];
        }
        
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }

    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        if (str === null || str === undefined) {
        return "";
        }
        
        if (typeof str !== "string") {
        str = String(str);
        }
        
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }


    validate(arr) {
        if (!Array.isArray(arr)) {
            return { error: "Need at least one boolean" };
        }

        let booleansOnly = arr.filter(item => typeof item === "boolean");

        if (booleansOnly.length === 0) {
            return { error: "Need at least one boolean" };
        }

        let trueCount = booleansOnly.filter(item => item === true).length;
        let falseCount = booleansOnly.filter(item => item === false).length;

        if (trueCount > falseCount) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Exercises
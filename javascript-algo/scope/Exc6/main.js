const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}


/*
output: nothing. The program is crashing cause isEnough is const and cannot be modified.

error: yes. isEnough cannot be modified.

undefined: nothing. 

isEnough: global scope
*/
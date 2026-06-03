const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()


/*
output: nothing/

error: yes. seed is local variable in getSeed and isn't valid in plant.

undefined: nothing. the program is crashing cause seed is not defined.

pot: global scope
seed: local scope of getSeed

*/
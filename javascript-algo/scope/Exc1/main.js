const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles") 

/*
output: "running" X 8
    "Finished running 8 miles"

error: yes in line 11 - distance is not defined cause it's local inside the block.

undefined: no

run: global scope,
distance: local scope  

*/
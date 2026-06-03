if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}


/*
output: nothing

error: yes - line 5, because cowSound is a local var of the first block.

undefined: nothing

cowSound: local scope

*/
const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

function PrintPrefixWords(prefix, words) {
    console.log(`Words that begin with  ${prefix}:`);
    for (let word of words) {
        if (word[0] === prefix) {
            console.log(word);
        }
    }
}

for (let key in dictionary) {
    const words = dictionary[key]
    PrintPrefixWords(key, words);
}
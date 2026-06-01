const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

function cleanText(sentence) {
    sentence = sentence.toLowerCase();

    for (let c of specialChars) {
        sentence = sentence.split(c).join("");
    }

    return sentence;
}

function toArray(str) {
    return cleanText(str).split(" ");
}

function addToCounter(word) {
    if (word in wordCounts) {
        wordCounts[word]++;
    } 
    else {
        wordCounts[word] = 1;
    }
}

function countWords(sentence) {
    let words = toArray(sentence);

    for (let word of words) {
        addToCounter(word)
    }

    return wordCounts;
}

countWords(story);
console.log(wordCounts)

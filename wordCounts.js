function wordCounts(sentence) {
    const counts = {};

    for (let word of sentence.split("")) {
        if (counts[word]) {
            //if the counts object contains a key with the string of word
            //we increment the value of the key by 1;
            counts[word] += 1;
        } else {
            //if no we add the word as a key to the object and set the value to 1
            counts[word] = 1;
        }
    }
    return counts;
    
}

const str = 'this is this and that is that';
console.log(wordCounts(str));
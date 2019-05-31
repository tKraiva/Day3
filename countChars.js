function countChars(str){
    const char ={};

    for (let word of str.split("")) {
        if (char[word]) {
            //if the counts object contains a key with the string of word
            //we increment the value of the key by 1;
            char[word] += 1;
        } else {
            //if no we add the word as a key to the object and set the value to 1
            char[word] = 1;
        }
    }
    return char;

}

let x = "well didnt see this coming";
console.log(countChars(x));
function randomPhrase() {
    let word1 = ["one", "two", "three", "four", "five"];
    let word2 = ["one1", "two2", "three3", "four4", "five5"];
    let word3 = ["one1one1", "two2one1", "three3one1", "four4one1", "five5one1"];

    let randomWord1 = Math.floor(Math.random() * word1.length);
    let randomWord2 = Math.floor(Math.random() * word2.length);
    let randomWord3 = Math.floor(Math.random() * word3.length);

    let phrase = word1[randomWord1] + " " + word2[randomWord2] + " " + word3[randomWord3];

    alert(phrase);

};
randomPhrase();
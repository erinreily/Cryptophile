function generateSentence() {
    var nouns = ["enemy troops", "messengers", "dogs", "letters", "prisoners", "soldiers", "tanks"];
    var prepositions = ["on the move", "fleeing", "stopping to rest", "preparing for attack", "planning something", "coming this way", "retreating"];
    var verbs = ["send", "destroy", "execute", "stop", "fight", "combat", "defeat"];
    var adverbs = ["quickly", "slowly", "carefully", "deliberately", "rapidly", "promptly", "forcefully"];
    var times = ["tomorrow", "tonight", "at noon", "this evening", "today", "in a week", "soon"];
    var num = Math.floor(Math.random() * 4);
    var sentence = "";
    switch (num) {
        case 0: //noun "are/is" preposition
            sentence = nouns[Math.floor(Math.random() * 7)] + " are " + prepositions[Math.floor(Math.random() * 7)];
            break;
        case 1: //verb noun time
            sentence = verbs[Math.floor(Math.random() * 7)] + " " + nouns[Math.floor(Math.random() * 7)] + " " + times[Math.floor(Math.random() * 7)];
            break;
        case 2: //time noun preposition
            sentence = times[Math.floor(Math.random() * 7)] + " " + nouns[Math.floor(Math.random() * 7)] + " " + prepositions[Math.floor(Math.random() * 7)];
            break;
        case 3: //verb noun adverb
            sentence = verbs[Math.floor(Math.random() * 7)] + " " + nouns[Math.floor(Math.random() * 7)] + " " + adverbs[Math.floor(Math.random() * 7)];

    }
    document.getElementById("message").title = sentence;
    newSentence = encrypt(sentence);
    document.getElementById("message").innerHTML = newSentence;
}

function encrypt(sentence) {
    var key = Math.floor(Math.random() * 25 + 1);
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var newSentence = "";

    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] == " " || sentence[i] == "," || sentence[i] == "'" || sentence[i] == ".") {
            newSentence += sentence[i];
            continue;
        }
        var j = 0;
        while (sentence[i] != alphabet[j]) {
            j++;
        }
        j = j + key;
        if (j > 25) {
            j -= 25;
        }
        newSentence += alphabet[j];
    }
    return newSentence;
}

function decrypt(sentence) {
    sentence = sentence.toLowerCase();
    shiftamt = document.getElementById("shiftamt").value;
    var newSentence = "";
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] == " " || sentence[i] == "," || sentence[i] == "'" || sentence[i] == ".") {
            newSentence += sentence[i];
            continue;
        }
        ascii = sentence[i].charCodeAt() - parseInt(shiftamt);
        if (ascii < 97) {
            ascii += 26;
        }
        newSentence += String.fromCharCode(ascii);
    }
    document.getElementById("cmessage").innerHTML = newSentence;
}

function vdecrypt(sentence) {
    sentence = sentence.toLowerCase();
    var key = document.getElementById("vkey").value;
    key = key.toLowerCase();
    var keynum = 0;
    var newSentence = "";
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] == " " || sentence[i] == "," || sentence[i] == "'" || sentence[i] == ".") {
            newSentence += sentence[i];
            continue;
        }

        var shiftamt = key[keynum].charCodeAt() - 97;
        var ascii = sentence[i].charCodeAt() - parseInt(shiftamt);
        console.log(ascii);
        if (ascii < 97) {
            ascii += 26;
        }
        
        newSentence += String.fromCharCode(ascii);

        if (keynum < key.length - 1) {
            keynum++;
        }
        else {
            keynum = 0;
        }

    }
    document.getElementById("vmessage").innerHTML = newSentence;
}

function checkSentence() {
    var elemKey = document.getElementById("message").title;
    var input = document.getElementById("input").value;
    input = input.toLowerCase();
    if (elemKey == input) {
        document.getElementById("feedback").innerHTML = "You got it!";
    }
    else {
        document.getElementById("feedback").innerHTML = "Incorrect answer.";
    }
}

function calculateFrequencyOfLetters(str) {
    var freq = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var charCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == " " || str[i] == "," || str[i] == "'" || str[i] == ".") {
            continue;
        }
        charCount++;
        var charIndex = str[i].charCodeAt() - 97;
        freq[charIndex]++;
    }
    
    for (var j = 0; j < freq.length; j++) {
        var id = String.fromCharCode(j + 97);
        document.getElementById(id).innerHTML = Math.round((freq[j] / charCount)*10000)/100 + "%";
    }
}

function updateTable() {
    var shiftamt = document.getElementById("shiftamt").value;
    for (var i = 0; i < 26; i++) {
        ascii = i + 97 + parseInt(shiftamt);
        if (ascii > 122) {
            ascii -= 26;
        }
        document.getElementById(i).innerHTML = String.fromCharCode(ascii);
    }
}

function erase() {
}
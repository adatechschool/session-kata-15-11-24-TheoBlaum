const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
}

function getLatinCharacterList(text) {
    return [...text];
}

function translateLatinCharacter(latinCharacter) {
    if (latinCharacter in latinToMorse) {
        return latinToMorse[latinCharacter];
    } else {
        return false;
    }
}

function encode(text) {
    const getCharacters = getLatinCharacterList(text); 
    const morseCode = []; 
    let index = 0; 
    for (const latinCharacter of getCharacters) {
        morseCode[index] = translateLatinCharacter(latinCharacter); 
        index++; 
    }
    return morseCode;  
}

function getMorseCharacterList(text) {
    const wordsSeparator = text.split(" / ");
    const morseList = [];
    for (const word of wordsSeparator) {
        morseList.push(word.split(" "));
    }
    return morseList;
}

function translateMorseCharacter(morseCharacter) {
    return morseToLatin[morseCharacter];
}

function decode(morseText) {
    const morseCharacterList = getMorseCharacterList(morseText);
    const decodedWords = []; 
    for (const word of morseCharacterList) {
        let decodedWord = '';
        for (const morseCharacter of word) {
            const letter = translateMorseCharacter(morseCharacter); 
            if (letter) {
                decodedWord += letter;  
            } else {
                decodedWord += ' '; 
            }
        }
        decodedWords.push(decodedWord); 
    }
    return decodedWords;
}

function decodeMorseToLatinText() {
    const morseInput = document.getElementById('morseInput').value;
    const decodedText = decode(morseInput);
    document.getElementById('decodedOutput').textContent = decodedText 
}

function encodeLatinText() {
    const textInput = document.getElementById('textInput').value;
    const encodedMorse = encode(textInput);
    document.getElementById('encodedOutput').textContent = encodedMorse 
}


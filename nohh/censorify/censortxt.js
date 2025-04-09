// List of default censored words
var censoredWords = ["sad", "bad", "mad"];

// List of custom censored words
var customCensoredWords = [];

// Function to censor words from the input string
function censor(inStr) {
  // Censor default words
  for (let idx in censoredWords) {
    const word = censoredWords[idx];
    const regex = new RegExp(word, 'gi'); // case-insensitive search
    inStr = inStr.replace(regex, "");
  }

  // Censor custom words
  for (let idx in customCensoredWords) {
    const word = customCensoredWords[idx];
    const regex = new RegExp(word, 'gi'); // case-insensitive search
    inStr = inStr.replace(regex, "");
  }

  return inStr;
}

// Function to add a custom censored word
function addCensoredWord(word) {
  customCensoredWords.push(word);
}

// Function to get all censored words (default + custom)
function getCensoredWords() {
  return censoredWords.concat(customCensoredWords);
}

// Export functions
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;

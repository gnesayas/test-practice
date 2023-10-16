function caesarCipher(word, offset) {
  const shiftedChars = [];
  for (const char of word) {
    shiftedChars.push(getShiftedChar(char, offset));
  }
  return shiftedChars.join("");
}

function getShiftedChar(char, offset) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (letters.includes(char)) {
    return getOffsetChar(char, offset, letters);
  } else if (capitalLetters.includes(char)) {
    return getOffsetChar(char, offset, capitalLetters);
  }
  return char;
}

function getOffsetChar(char, offset, letters) {
  const index = letters.indexOf(char);
  let newIndex = index + offset;
  if (newIndex > 25) {
    newIndex -= 26;
  } else if (newIndex < 0) {
    newIndex += 26;
  }
  return letters.slice(newIndex, newIndex + 1);
}

module.exports = caesarCipher;

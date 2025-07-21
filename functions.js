function capitalize(string) {
  const firstLetter = string.charAt(0).toUpperCase();
  const remainingLetters = string.slice(1);
  return firstLetter + remainingLetters;
}

const calculator = {
  sum(a, b) {
    return a + b;
  },
  difference(a, b) {
    return a - b;
  },
  product(a, b) {
    return a * b;
  },
  quotient(a, b) {
    return a / b;
  },
};

function caesarCipher(string, shift) {
  const ALPHABET = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const stringArr = string.split("");
  const newArr = [];
  stringArr.forEach((letter) => {
    // find the index of the letter in the alphabet
    const index = ALPHABET.indexOf(letter);
    // increment the index by SHIFT
    const newIndex = index + shift;
    if (index === -1) {
      newArr.push(letter);
    } else {
      newArr.push(ALPHABET[newIndex]);
    }
  });
  return newArr.join("");
}

module.exports = {
  capitalize,
  calculator,
  caesarCipher,
};

function capitalize(string) {
  const firstLetter = string.charAt(0).toUpperCase();
  const remainingLetters = string.slice(1);
  return firstLetter + remainingLetters;
}

module.exports = capitalize;

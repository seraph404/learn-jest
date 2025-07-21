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

module.exports = {
  capitalize,
  calculator,
};

const { capitalize } = require("./functions");

test("capitalizes the first character of a string", () => {
  expect(capitalize("cat")).toBe("Cat");
});

const { calculator } = require("./functions");

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test("subtracts 2 - 1 to equal 1", () => {
  expect(calculator.difference(2, 1)).toBe(1);
});

test("multiplies 5 * 2 to equal 10", () => {
  expect(calculator.product(5, 2)).toBe(10);
});

test("divides 10 by 5 to equal 2", () => {
  expect(calculator.quotient(10, 5)).toBe(2);
});

const { caesarCipher } = require("./functions");

test("shifts the string 'abc' to be 'def'", () => {
  expect(caesarCipher("abc")).toBe("def");
});

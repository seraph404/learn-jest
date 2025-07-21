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
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("shifted letter casing should follow original", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("non-alphabetical characters should remain unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

const { analyzeArray } = require("./functions");

test("returns the correct calculations in the array", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.average).toBe(4);
  expect(result.min).toBe(1);
  expect(result.max).toBe(8);
  expect(result.length).toBe(6);
});

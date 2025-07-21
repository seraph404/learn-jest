// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const capitalize = require("./functions");

test("capitalizes the first character of a string", () => {
  expect(capitalize("cat")).toBe("Cat");
});

import { fibonacci } from "./fibonacci.ts";

test("fibonacci-5", () => {
  expect(fibonacci(5)).toBe(5);
});

test("fibonacci-negative", () => {
  const will_throw = () => {
    fibonacci(-1);
  };
  expect(will_throw).toThrow("Cannot compute on negative numbers");
});

test("fibonacci-0", () => {
  expect(fibonacci(0)).toBe(0);
});

test("fibonacci-1", () => {
  expect(fibonacci(1)).toBe(1);
});

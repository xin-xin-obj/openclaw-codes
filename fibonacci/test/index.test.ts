import { describe, expect, it } from "vitest";

import { fibonacci, fibonacciSequence, isFibonacci } from "../src/index";

describe("fibonacci", () => {
  it("returns base cases", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  it("returns correct values for small n", () => {
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(7)).toBe(13);
  });

  it("returns correct values for larger n", () => {
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(20)).toBe(6765);
  });

  it("throws on negative n", () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
    expect(() => fibonacci(-100)).toThrow(RangeError);
  });

  it("throws on non-integer n", () => {
    expect(() => fibonacci(1.5)).toThrow(TypeError);
    expect(() => fibonacci(Math.PI)).toThrow(TypeError);
    expect(() => fibonacci(NaN)).toThrow(TypeError);
  });
});

describe("fibonacciSequence", () => {
  it("returns empty array for n=0", () => {
    expect(fibonacciSequence(0)).toEqual([]);
  });

  it("returns single element for n=1", () => {
    expect(fibonacciSequence(1)).toEqual([0]);
  });

  it("returns correct sequence for small n", () => {
    expect(fibonacciSequence(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});

describe("isFibonacci", () => {
  it("correctly identifies Fibonacci numbers", () => {
    expect(isFibonacci(0)).toBe(true);
    expect(isFibonacci(1)).toBe(true);
    expect(isFibonacci(2)).toBe(true);
    expect(isFibonacci(3)).toBe(true);
    expect(isFibonacci(5)).toBe(true);
    expect(isFibonacci(8)).toBe(true);
    expect(isFibonacci(13)).toBe(true);
    expect(isFibonacci(55)).toBe(true);
  });

  it("correctly identifies non-Fibonacci numbers", () => {
    expect(isFibonacci(4)).toBe(false);
    expect(isFibonacci(6)).toBe(false);
    expect(isFibonacci(7)).toBe(false);
    expect(isFibonacci(9)).toBe(false);
    expect(isFibonacci(10)).toBe(false);
  });

  it("returns false for negative numbers", () => {
    expect(isFibonacci(-1)).toBe(false);
    expect(isFibonacci(-5)).toBe(false);
  });
});

import gcd from '../../src/modules/calculation/util/gcd.js';
import exp from '../../src/modules/calculation/util/exp.js';
import percentage from '../../src/modules/calculation/util/percentage.js';

describe("Unit Tests - gcd module", () => {
  test("gcd of 12 and 8 is 4", () => {
    expect(gcd(12, 8)).toBe(4);
  });

  test("gcd of 7 and 13 is 1", () => {
    expect(gcd(7, 13)).toBe(1);
  });

  test("gcd of 0 and 5 is 5", () => {
    expect(gcd(0, 5)).toBe(5);
  });
});

describe("Unit Tests - exp module", () => {
  test("2^3 = 8", () => {
    expect(exp(2, 3)).toBe(8);
  });

  test("5^0 = 1", () => {
    expect(exp(5, 0)).toBe(1);
  });

  test("10^1 = 10", () => {
    expect(exp(10, 1)).toBe(10);
  });
});

describe("Unit Tests - percentage module", () => {
  test("50 is 50% of 100", () => {
    expect(percentage(50, 100)).toBe(50);
  });

  test("20 is 25% of 80", () => {
    expect(percentage(20, 80)).toBe(25);
  });

  test("throws error on division by zero", () => {
    expect(() => percentage(10, 0)).toThrow("Cannot divide by zero");
  });
});

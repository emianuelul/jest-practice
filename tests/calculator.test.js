import { Calculator } from '../functions/calculator';

test('Exists', () => {
  expect(Calculator).toBe;
});

describe('Has Static Methods', () => {
  const methods = ['add', 'subtract', 'divide', 'multiply'];

  methods.forEach((m) => {
    test(`Calculator has ${m} method`, () => {
      expect(typeof Calculator[m]).toBe('function');
    });
  });
});

describe('Operations', () => {
  test('add method', () => {
    expect(Calculator.add(1, 1)).toBe(2);
    expect(Calculator.add(9, 1)).toBe(10);
    expect(Calculator.add(-11, 1)).toBe(-10);
  });

  test('subtract method', () => {
    expect(Calculator.subtract(1, 1)).toBe(0);
    expect(Calculator.subtract(9, 1)).toBe(8);
    expect(Calculator.subtract(-11, 1)).toBe(-12);
  });

  test('multiply method', () => {
    expect(Calculator.multiply(1, 1)).toBe(1);
    expect(Calculator.multiply(9, 0)).toBe(0);
    expect(Calculator.multiply(-11, 2)).toBe(-22);
  });

  test('divide method', () => {
    expect(Calculator.divide(1, 1)).toBe(1);
    expect(Calculator.divide(9, 9)).toBe(1);
    expect(Calculator.divide(-11, 2)).toBeCloseTo(-5.5);
  });
});

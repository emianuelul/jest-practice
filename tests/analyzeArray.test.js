import { analyzeArray } from '../functions/analyzeArray';

test('Exists', () => {
  expect(analyzeArray).toBe;
});

test('Basic array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Single element array', () => {
  expect(analyzeArray([5])).toMatchObject({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test('Negative numbers', () => {
  expect(analyzeArray([-2, -8, -3, -4])).toMatchObject({
    average: -4.25,
    min: -8,
    max: -2,
    length: 4,
  });
});

test('Mixed numbers', () => {
  expect(analyzeArray([10, -3, 0, 7, 2])).toMatchObject({
    average: 3.2,
    min: -3,
    max: 10,
    length: 5,
  });
});

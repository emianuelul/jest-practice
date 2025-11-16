import { reverseString } from '../functions/reverseString';

test('Exists', () => {
  expect(reverseString).toBe;
});

test('Reverses', () => {
  expect(reverseString('Emi')).toMatch('imE');
  expect(reverseString('racecar')).toMatch('racecar');
  expect(reverseString('1234567890')).toMatch('0987654321');
});

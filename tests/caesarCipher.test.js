import { caesarCipher } from '../functions/caesarCipher';

test('Exists', () => {
  expect(caesarCipher).toBe;
});

test('works for abc', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('z-a wrapping', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Case preservation', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('AbCz', 2)).toBe('CdEb');
});

test('Ignores non letter characters', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  expect(caesarCipher('123! go.', 5)).toBe('123! lt.');
});

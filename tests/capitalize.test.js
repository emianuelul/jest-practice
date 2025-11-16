import { capitalize } from '../functions/capitalize';

test('Exists', () => {
  expect(capitalize).toBe;
});

test('Capitalize', () => {
  expect(capitalize('dick')).toMatch('Dick');
  expect(capitalize('bangdik')).toMatch('Bangdik');
  expect(capitalize('eMI')).toMatch('EMI');
});

test('All Caps', () => {
  expect(capitalize('DICK')).toMatch('DICK');
  expect(capitalize('BANGDIK')).toMatch('BANGDIK');
  expect(capitalize('EMI')).toMatch('EMI');
});

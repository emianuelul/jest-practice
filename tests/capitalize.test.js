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

test('Includes digits', () => {
  expect(capitalize('123')).toMatch('123');
  expect(capitalize('e@131')).toMatch('E@131');
});

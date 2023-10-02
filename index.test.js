const { customPow } = require('./index');

test('кидає помилку на невалідний вхідний параметр (обидва окремо перевірить)', () => {
  expect(() => customPow('3', 7)).toThrow('Both arguments must be numbers');
  expect(() => customPow(3, '7')).toThrow('Both arguments must be numbers');
});

test('правильно рахує для додатнього ступеня', () => {
  const result = customPow(3, 3);
  expect(result).toBe(27);
});

test('правильно рахує для ступеня 0', () => {
  const result = customPow(2, 0);
  expect(result).toBe(1);
});

test('правильно рахує для від\'ємного ступеня', () => {
  const result = customPow(2, -3);
  expect(result).toBe(0.125);
});

test('правильно рахує для від\'ємної основи', () => {
  const result = customPow(-2, 3);
  expect(result).toBe(-8);
});

test('кидає помилку на нецілий ступінь', () => {
  expect(() => customPow(2, 1.5)).toThrow('Both arguments must be integers');
});

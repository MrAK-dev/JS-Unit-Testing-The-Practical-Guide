import { it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

it('should throw an error if an empty string is provided as a value', () => {
  const testInput = '';

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrowError();
});

it('should throw an error if a string of blanks is provided as a value', () => {
  const testInput = '   ';

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrowError();
});

it('should throw an error with the provided error message', () => {
  const testInput = '';
  const testErrorMessage = 'Test';

  const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

  expect(validationFn).toThrowError(testErrorMessage);
});

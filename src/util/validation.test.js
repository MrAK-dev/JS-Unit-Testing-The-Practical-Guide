import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty()', () => {
  it('should throw an error, if an empty string is provided', () => {
    const input = '';

    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).toThrowError();
  });

  it('should throw an error, with a message that contains a reason (must not be empty)', () => {
    const input = '';

    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).toThrowError(/must not be empty/);
  });

  it('should throw an error, if a long string of blanks is provided', () => {
    const input = '     ';

    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).toThrowError();
  });

  it('should throw an error, if any other value than a string is provided', () => {
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};

    const validationFnNum = () => validateStringNotEmpty(inputNum);
    const validationFnBool = () => validateStringNotEmpty(inputBool);
    const validationFnObj = () => validateStringNotEmpty(inputObj);

    expect(validationFnNum).toThrowError();
    expect(validationFnBool).toThrowError();
    expect(validationFnObj).toThrowError();
  });

  it('should NOT throw an error, if string provided', () => {
    const input = 'test';

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).not.toThrowError();
  });
});

describe('validateNumber()', () => {
  it('should throw an error, if NaN is provided', () => {
    const input = NaN;

    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrowError();
  });

  it('should throw an error, with a message that contains a reason (Invalid number)', () => {
    const input = NaN;

    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrowError(/Invalid number/);
  });

  it('should throw an error, if a non-numeric value is provided', () => {
    const input = '1';

    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrowError();
  });

  it('should NOT throw and error, if a number is provided', () => {
    const input = 1;

    const validationFn = () => validateNumber(input);

    expect(validationFn).not.toThrowError();
  });
});

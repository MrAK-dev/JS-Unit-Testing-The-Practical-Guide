import { describe, it, expect, vi } from 'vitest'; // vi --> jest for jest
import { generateReportData } from './data';

describe('generateReportData()', () => {
  it('should execute logFn if provided', () => {
    const logger = vi.fn();
    // const logger = vi.fn(() => {});

    // logger.mockImplementation(() => {})
    // logger.mockImplementationOnce(() => {})

    generateReportData(logger);

    expect(logger).toBeCalled();
    // expect(logger).toBeCalledTimes(2);
    // expect(logger).toBeCalledWith();
  });
});

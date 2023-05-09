import { describe, it, expect, beforeEach } from 'vitest';
import { extractPostData } from './posts';

const testTitle = 'Test Title';
const testContent = 'Test content';

let testFormData = {
  title: testTitle,
  content: testContent,
  get(key) {
    return this[key];
  },
};

describe('extractPostData()', () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(key) {
        return this[key];
      },
    };
  });

  it('should extract title and content from the provided form data', () => {
    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});

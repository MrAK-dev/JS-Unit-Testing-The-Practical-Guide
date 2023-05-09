import fs from 'fs';
import path from 'path';

import { vi, it } from 'vitest';
import { Window } from 'happy-dom';

import { showError } from './dom';

// @vitest-environment happy-dom

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal('document', document);

it('first test', () => {
  showError('test');
});

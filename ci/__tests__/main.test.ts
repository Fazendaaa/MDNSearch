/**
 * Test the functions.
 */
'use strict';

import { readFileSync } from 'fs';
import { join } from 'path';
import { MDNContext, MDNResponse, searchMDN } from '../../src/main';

interface Input {
    test: string;
    input: MDNContext;
    output: MDNResponse
}

const basePath = join(__dirname, '../__mocks__/');
const readInput = (idiom: string): Array<Input> => JSON.parse(readFileSync(basePath.concat(`${idiom}/searchMDN.json`), 'utf8'));

const idioms = [ 'en-US', 'pt-BR' ];
const mocks = idioms.map(readInput).reduce((acc, cur) => acc.concat(cur), []);

describe('Testing searches', () => mocks.forEach(mock =>
    test(mock.test, () => {
        expect(searchMDN(mock.input)).resolves.toEqual(mock.output);
    })
));

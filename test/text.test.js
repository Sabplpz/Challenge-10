const { describe, test } = require("node:test");
const text = require("../lib/text.js");
const { equal } = require("assert");

describe('3 letters', () => {
    
    it('Should generate the same string as given', () => {
        const expectedSVG = 'UCF'
        const testText = new text('UCF');
        expect(testText.textFormatting()).toEqual(expectedSVG);
    });
});

describe('6 letters', () => {
    
    it('Should generate the first 3 letters of the given string', () => {
        const expectedSVG = 'UOF';
        const testText = new text('UOFCFL');
        expect(testText.textFormatting()).toEqual(expectedSVG);
    });
});

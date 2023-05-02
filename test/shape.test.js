const { describe, test } = require("node:test");
const shape = require("../lib/shape.js");
const { equal } = require("assert");

describe('triangle', () => {
    
    it('Should generate the correct code for a green triangle', () => {
        const expectedSVG = `<polygon points="30 200, 145 0, 280 200" style="fill:green" />`
        const testShape = new shape('triangle', 'green');
        expect(testShape.generateShape()).toEqual(expectedSVG);
    });
});

describe('circle', () => {
    
    it('Should generate the correct code for a blue circle', () => {
        const expectedSVG = `<circle cx="150" cy="110" r="100" style="fill:blue" />`
        const testShape = new shape('circle', 'blue');
        expect(testShape.generateShape()).toEqual(expectedSVG);
    });
});

describe('square', () => {
    
    it('Should generate the correct code for a red square', () => {
        const expectedSVG = `<rect x="50" y="20" width="200" height="200" style="fill:red" />`
        const testShape = new shape('square', 'red');
        expect(testShape.generateShape()).toEqual(expectedSVG);
    });
});

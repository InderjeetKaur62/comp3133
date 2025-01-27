// test/calculator.js

const { expect } = require('chai');
const { add, sub, mul, div } = require('calculator.js'); // adjust path based on your folder structure

describe('Calculator Test Cases', () => {

    // Add Tests
    it('add(5, 2) should return 7 - PASS', () => {
        expect(add(5, 2)).to.equal(7);
    });

    it('add(5, 2) should return 8 - FAIL', () => {
        expect(add(5, 2)).to.equal(8);
    });

    // Subtract Tests
    it('sub(5, 2) should return 3 - PASS', () => {
        expect(sub(5, 2)).to.equal(3);
    });

    it('sub(5, 2) should return 5 - FAIL', () => {
        expect(sub(5, 2)).to.equal(5);
    });

    // Multiply Tests
    it('mul(5, 2) should return 10 - PASS', () => {
        expect(mul(5, 2)).to.equal(10);
    });

    it('mul(5, 2) should return 12 - FAIL', () => {
        expect(mul(5, 2)).to.equal(12);
    });

    // Divide Tests
    it('div(10, 2) should return 5 - PASS', () => {
        expect(div(10, 2)).to.equal(5);
    });

    it('div(10, 2) should return 2 - FAIL', () => {
        expect(div(10, 2)).to.equal(2);
    });

});

var { readJSON } = require('./config');

describe('Read from file', () => {
    it('Testing actually works', () => {
        expect(readJSON()).toBe(true)
    });
});
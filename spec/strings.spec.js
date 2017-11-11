const stringFunctions = require('../string.functions');

describe(`String function`, () => {
    describe(`#capitalize`, () => {
        const capitalize = stringFunctions.capitalize;

        it(`should capitalize lower case strings`, () => {
            expect(capitalize(`my lower case string`)).toBe('My lower case string')
        });

        it(`should capitalize upper case strings`, async () => {
            expect(capitalize(`UPPERCASED STRING`)).toBe('Uppercased string')
        });

        it(`should return undefined when no arguments passed`, async () => {
            expect(capitalize()).not.toBeDefined();
        });

        it(`should return empty string when empty string is passed`, async () => {
            expect(capitalize('')).toBe('');
        });

        it(`should return empty string when not string argument is passed`, async () => {
            expect(capitalize(123)).toBe('');
        });
    });

    describe('#countWords', () => {
        const countWords = stringFunctions.countWords;

        it(`should count words in string`, () => {
            expect(countWords('my beautiful string')).toBe(3)
        });

        it(`should count words correctly in string when words separated with multiple space`, () => {
            expect(countWords('my    beautiful    string')).toBe(3)
        });

        it(`should ignore starting and trailing spaces`, () => {
            expect(countWords('    my beautiful string  ')).toBe(3, 'HINT: try trim')
        });

        it(`should return 0 when there are no words in the string`, () => {
            expect(countWords('    ')).toBe(0)
        });

        it(`should return undefined when parameter is not string`, () => {
            expect(countWords(1)).toBeUndefined();
        });
    });

    describe(`#zeroReplacer`, () => {
        const zeroReplacer = stringFunctions.zeroReplacer;

        it(`should replace ALL zeros with spaces`, () => {
            expect(zeroReplacer('My0space0bar0is0broken!')).toBe('My space bar is broken!');
        });

        it(`should return undefined when parameter is not string`, () => {
            expect(zeroReplacer(1)).toBeUndefined();
        });
    });
});

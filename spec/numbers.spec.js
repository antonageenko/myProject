const numberFunctions = require('../number.functions');

fdescribe(`Number function`, () => {
    describe(`#taxCounter`, () => {
        const taxCounter = numberFunctions.taxCounter;

        it(`should accept price and return total amount with default tax (20%)`, () => {
            const price = '$ 100.00';

            const expectedAmount = '$ 120.00';

            expect(taxCounter(price))
                .toBe(expectedAmount, `Incorrect total for price ${price} and default tax size and currency symbol`);
        });

        it(`should accept tax size as second parameter`, () => {
            const price = '$ 100.00';
            const taxSize = 15;
            const expectedAmount = '$ 115.00';

            expect(taxCounter(price, taxSize))
                .toBe(expectedAmount, `Incorrect total for price ${price} nad tax ${taxSize}`);
        });

        it(`should correctly count total if tzx size is 0`, () => {
            const price = '$ 100.00';
            const taxSize = 0;

            expect(taxCounter(price, taxSize))
                .toBe(price, `Incorrect total for price ${price} nad tax ${taxSize}`);
        });

        it(`should accept currency symbol as third parameter`, () => {
            const currenceSymbol = 'RUB';
            const price = `${currenceSymbol} 100.00`;
            const taxSize = 15;
            const expectedAmount = `${currenceSymbol} 115.00`;

            expect(taxCounter(price, taxSize, currenceSymbol))
                .toBe(expectedAmount,
                    `Incorrect total for price ${price}, tax ${taxSize}, and currence symbol ${currenceSymbol}`);
        });

        it('should cut price to 2 decimal chars', () => {
            const price = '$ 0.01';

            const expectedAmount = '$ 0.01';

            expect(taxCounter(price))
                .toBe(expectedAmount, `Incorrect total for price ${price}`);
        });

        it(`should return undefined and print explanation if price is not positive`, () => {
            spyOn(console, 'log');
            const currenceSymbol = 'RUB';
            const price = `${currenceSymbol} -0.01`;

            expect(taxCounter(price, undefined, currenceSymbol))
                .toBeUndefined(`Incorrect total for price ${price}`);

            expect(console.log)
                .toHaveBeenCalledWith(`Price should be greater than ${currenceSymbol} 0.00, but got ${price}`)
        });

        it(`should return undefined and print explanation if price is zero`, () => {
            spyOn(console, 'log');
            const currenceSymbol = 'RUB';
            const price = `${currenceSymbol} 0.00`;

            expect(taxCounter(price, undefined, currenceSymbol))
                .toBeUndefined(`Incorrect total for price ${price}`);

            expect(console.log)
                .toHaveBeenCalledWith(`Price should be greater than ${currenceSymbol} 0.00, but got ${price}`)
        });

        it(`should return undefined and print explanation if tax size is less than zero`, () => {
            spyOn(console, 'log');
            const currenceSymbol = 'RUB';
            const taxSize = -0.01;
            const price = `${currenceSymbol} 1`;

            expect(taxCounter(price, taxSize, currenceSymbol))
                .toBeUndefined(`Incorrect total for price ${price}`);

            expect(console.log)
                .toHaveBeenCalledWith(`Tax size should be greater than or equal to 0, but got ${taxSize}`)
        });
    });
});

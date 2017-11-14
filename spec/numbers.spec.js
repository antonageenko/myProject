const numberFunctions = require('../number.functions');

describe(`Number function`, () => {
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
            const currencySymbol = 'RUB';
            const price = `${currencySymbol} 100.00`;
            const taxSize = 15;
            const expectedAmount = `${currencySymbol} 115.00`;

            expect(taxCounter(price, taxSize, currencySymbol))
                .toBe(expectedAmount,
                    `Incorrect total for price ${price}, tax ${taxSize}, and currence symbol ${currencySymbol}`);
        });

        it('should cut total to 2 decimal chars', () => {
            const price = '$ 0.01';

            const expectedAmount = '$ 0.01';

            expect(taxCounter(price))
                .toBe(expectedAmount, `Incorrect total for price ${price}`);
        });

        it(`should return undefined and print explanation if price is not positive`, () => {
            const currencySymbol = 'RUB';
            const price = `${currencySymbol} -0.01`;

            spyOn(console, 'log');

            expect(taxCounter(price, undefined, currencySymbol))
                .toBeUndefined(`Incorrect total for price ${price}`);

            expect(console.log)
                .toHaveBeenCalledWith(`Price should be greater than ${currencySymbol} 0.00, but got ${price}`)
        });

        it(`should return undefined and print explanation if price is zero`, () => {
            const currencySymbol = 'RUB';
            const price = `${currencySymbol} 0.00`;

            spyOn(console, 'log');

            expect(taxCounter(price, undefined, currencySymbol))
                .toBeUndefined(`Incorrect total for price ${price}`);

            expect(console.log)
                .toHaveBeenCalledWith(`Price should be greater than ${currencySymbol} 0.00, but got ${price}`)
        });

        it(`should return undefined and print explanation if tax size is less than zero`, () => {
            const currencySymbol = 'RUB';
            const taxSize = -0.01;
            const price = `${currencySymbol} 1`;

            spyOn(console, 'log');

            expect(taxCounter(price, taxSize, currencySymbol))
                .toBeUndefined(`Incorrect total for price ${price}`);

            expect(console.log)
                .toHaveBeenCalledWith(`Tax size should be greater than or equal to 0, but got ${taxSize}`)
        });

        describe(`should verify that price currency matches to provided currency symbol -`, () => {
            it(`case: price = 'RUB 100.00', currency = '$'`, () => {
                const currencySymbol = 'RUB';
                const price = `RUB 100.00`;
                const taxSize = 15;
                const expectedAmount = `${currencySymbol} 115.00`;

                spyOn(console, 'log');

                expect(taxCounter(price, taxSize)).toBeUndefined();
                expect(console.log)
                    .toHaveBeenCalledWith(`Price currency does not match to provided currency`)
            });

            it(`case: price = ' $ 100.00', currency = '$'`, () => {
                const price = ` $ 100.00`;
                const expectedAmount = `$ 120.00`;

                spyOn(console, 'log');

                expect(taxCounter(price))
                    .toBe(expectedAmount, `Incorrect total for price ${price} and default tax size and currency symbol`);
                expect(console.log).not
                    .toHaveBeenCalledWith(`Price currency does not match to provided currency`)
            });

            it(`case: price = '100.00$', currency = '$'`, () => {
                const price = `100.00$`;

                spyOn(console, 'log');

                expect(taxCounter(price)).toBeUndefined();
                expect(console.log)
                    .toHaveBeenCalledWith(`Price currency does not match to provided currency`)
            });
        });
    });
});

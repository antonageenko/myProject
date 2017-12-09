const tValidator = require('../bin/triangle.validator.js');

describe(`Triangle Validator`, () => {
  //  describe(`#triangleValidator`, () => {
        const triangleValidator = tValidator;

        it('should accept three sides and if they are equal return equilateral triangle', () => {
            const sideA = 2;
            const sideB = 2;
            const sideC = 2;
            expect(triangleValidator(sideA, sideB, sideC))
                .toBe(`equilateral`);
        });

         it('should accept three sides and if they are equal return equilateral triangle', () => {
             const sideA = 2;
             const sideB = 3;
             const sideC = 4;
             expect(triangleValidator(sideA, sideB, sideC))
                 .toBe(`The triangle is: versatile`);
         });

    //});
});

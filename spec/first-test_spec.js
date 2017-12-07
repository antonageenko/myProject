const hireCandidate = require('../hireCandidate');

describe(`Candidate`, () => {
    describe(`#hire`, () => {
        const hire = hireCandidate.hireCandidate;
        it('should accept male candidate age 16 and return success response', () => {
            const age = 16;
            const sex = 'male';
//            const expectedResponse = 'Candidate can be hired';
            expect(hire(sex, age))
                .toBe(`Candidate can be hired`);

        });

        it('should accept male candidate age 50 and return success response', () => {
            const age = 50;
            const sex = 'male';
            expect(hire(sex, age))
                .toBe(`Candidate can be hired`);
        });

        it('should accept female candidate age 20 and return success response', () => {
            const age = 20;
            const sex = 'female';
            expect(hire(sex, age))
                .toBe(`Candidate can be hired`);
        });

        it('should accept female candidate age 45 and return success response', () => {
            const age = 45;
            const sex = 'female';
            expect(hire(sex, age))
                .toBe(`Candidate can be hired`);
        });

        it('should accept male candidate age 15 and return failed response', () => {
            const age = 15;
            const sex = 'male';
            expect(hire(sex, age))
                .toBe(`Candidate is too young. Minimum age for male is 16`);
        });

        it('should accept male candidate age 50 and return failed response', () => {
            const age = 51;
            const sex = 'male';
            expect(hire(sex, age))
                .toBe(`Candidate is too old. Maximum age for male is 50`);
        });

        it('should accept female candidate age 19 and return failed response', () => {
            const age = 19;
            const sex = 'female';
            expect(hire(sex, age))
                .toBe(`Candidate is too young. Minimum age for female is 20`);
        });

        it('should accept female candidate age 46 and return failed response', () => {
            const age = 46;
            const sex = 'female';
            expect(hire(sex, age))
                .toBe(`Candidate is too old. Maximum age for female is 45`);
        });

        it('should decline response if age as not a number', () => {
            const age = 'twelve';
            expect(hire(age))
                .toBe(`Age should be a number`);
        });
    });
});

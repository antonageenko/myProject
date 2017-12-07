exports.hireCandidate = (sex, age) => {
    if (age < 16 && sex === 'male') {
        return `Candidate is too young. Minimum age for male is 16`;
    }
    else if (age > 50 && sex === 'male') {
        return (`Candidate is too old. Maximum age for male is 50`);
    }
    else if (age < 20 && sex === 'female') {
        return (`Candidate is too young. Minimum age for female is 20`);
    }
    else if (age > 45 && sex === 'female') {
        return (`Candidate is too old. Maximum age for female is 45`);
    }
    else if (typeof age !== 'number') {
        return `Age should be a number`;
    }
    return `Candidate can be hired`;
}
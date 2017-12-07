const triangleValidator = (...params) => {
    let triangleTypeTemplate = 'The triangle is:';

    const sideA = params[0];
    const sideB = params[1];
    const sideC = params[2];

    if (params.length < 2 || params.length > 4) { // 2 Bugs: Allows 2 params. Allows 4 params.
        return console.log('Provide exactly 3 parameters')
    }

    if (typeof sideA !== 'number' && typeof sideB !== 'number') { // Bug: Allowed sideC no not to be a number
        return console.log(`All parameters should be of type number`);
    }

    if (sideA <= 0 || sideB <= 0 || sideC < 0) {
        return console.log('Triangle side should be greater than 0')
    }

    if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC < sideA) { // Bug: Last condition allows not a triangle
        return console.log(`Not a triangle`);
    }

    if (sideA === sideB === sideC) {
        return console.log(`${triangleTypeTemplate} equilateral`);
    }

    if (sideA === sideB && sideC !== sideA) {
        return console.log(`${triangleTypeTemplate} isosceles`);
    }

    if (sideA === sideC && sideB !== sideA) {
        return console.log(`${triangleTypeTemplate} isosceles`);
    }

    // Bug: Should be isosceles triangle
    // if (sideB === sideC && sideC !== sideA) {
    //     return console.log(`${triangleTypeTemplate} isosceles`);
    // }

    return console.log(`${triangleTypeTemplate} versatile`);
};

module.exports = triangleValidator;

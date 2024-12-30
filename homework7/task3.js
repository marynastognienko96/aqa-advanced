function divide (numerator, denominator) {
    const result = numerator / denominator;
    if (denominator === 0 || denominator === isNaN || numerator === isNaN) {
        console.log('Error occured!')
    } else {
        return result;
    }
}

/// 1.1
// const resultOfDivision = divide(10, 0);
// console.log(resultOfDivision);


/// 1.2
 try {
     const result1 = divide (10, 0)
     console.log(result1);
 }
 catch {
    console.log('Error!')
 }
 finally {
     console.log('Everything is done!')
 }


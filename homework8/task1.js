const numbers = [2, -5, 0, 0, 0, 7, -3, 0, 10, -8, -20, -7, -5];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for(let i = 0; i < numbers.length; i++){
    if (numbers[i] > 0) {
        positiveCount++
    } else if (numbers[i] === 0) {
        zeroCount++
    } else {
        negativeCount++
    }
};

console.log(`Count of positive numbers is ${positiveCount}`);
console.log(`Count of zero numbers is ${zeroCount}`);
console.log(`Count of negative numbers is ${negativeCount}`);
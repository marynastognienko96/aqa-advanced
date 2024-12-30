function newFunc(num) {
    if (num > 0) {
        console.log(num);
        return newFunc(num - 1);
    }
     else {
         return 0;
     }
}

const num = 5;
const substraction = newFunc(5);
console.log(substraction);
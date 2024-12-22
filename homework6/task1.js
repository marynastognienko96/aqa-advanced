// function declaration

function getAreaOfRectangle (width, height) {
    return width * height
}

const result1 = getAreaOfRectangle(5, 15)
console.log(result1);

// function expression

const area1 = function (width, height) {
    return width * height
}

const result2 = area1(5, 10)
console.log(result2);

// arrow function

const area2 = (width, height) => width * height

console.log(area2(3, 10));
// 4.1
let radiusOfCircle = 23.5;
const pi = Math.PI;
let areaOfCircle = pi * radiusOfCircle ^ 2
let roundedAreaOfCircle = areaOfCircle.toFixed(2);

console.log(roundedAreaOfCircle);

// 4.2
const length = 10.5;
let width = 5.2;
let areaOfRectangle = length * width;
let roundedAreaOfRectangle = areaOfRectangle.toFixed(2);

console.log(roundedAreaOfRectangle);

// 4.3
let radiusOfCylinder = 12.3;
let heightOfCylinder = 25.2;
let volumeOfCylinder = pi * radiusOfCylinder ^ 2 * heightOfCylinder;
let roundedVolume = volumeOfCylinder.toFixed(2);

console.log(roundedVolume);
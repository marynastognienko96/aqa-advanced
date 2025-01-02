const car1 = {
    brand1: "BMW",
    model1: "X5",
    year1: "2020"
};

const car2 = {
    brand2: "Mercedes Benz",
    model2: "G 63 AMG",
    year2: "2017"
};

const car3 = {...car1, ...car2};

console.log(car3);
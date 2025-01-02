const person = {
    firstName: "John",
    lastName: "Doe",
    age: 34
};

// Adding new value
person.emailAdress = "johndoe@test.test";

// Deleting age value
delete person.age;

console.log(person);
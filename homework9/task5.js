const people = [
    { firstName: 'John', lastName: 'Doe', age: 30, sex: 'male' },
    { firstName: 'Julie', lastName: 'Adams', age: 20, sex: 'female' },
    { firstName: 'John', lastName: 'Cena', age: 45, sex: 'male' }
  ];
  
  // 1.1.
  for (const key in people) {
    const person = people[key];
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old and is a ${person.sex}`);
  }

  // 1.2.
  for (const { firstName, lastName, age, sex } of people) {
    console.log(`${firstName} ${lastName} is ${age} years old and is a ${sex}`);
    // console.log(firstName);
    // console.log(lastName);
    // console.log(age);
    // console.log(sex);
  }
   

//obj1

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];


// let getNames = students.filter((grade) => {
//     if (grade.percent >= 85) {console.log({...grade, grade: "5"});}else if (grade.percent <= 85 && grade.percent >= 70) {console.log({...grade, grade: "4"});}else if (grade.percent <= 70 && grade.percent >= 60) {console.log({...grade, grade: "3"});}else {console.log({...grade, grade: "Ikkichi"});}
// });



//obj2

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// let animalCount = animals.reduce((acc, animal) => {
//     acc[animal] = (acc[animal] || 0) + 1;
//     return acc;
// }, {});

// console.log(animalCount);

//obj3

// let numbers =  [1, 2, 3, 4, 5];

// let  doubleNUmbers = numbers.map((el) => console.log(el ** 2))


//obj4

// let numbers =  [ 1, -4, 12, 0, -3, 29, -150];

// let positiveNumbers = numbers.filter((musbat) => musbat >= 0);

// let sum = positiveNumbers.reduce((acc,el) => acc + el, 0 )


// console.log(sum);

//obj5

// let names = 'George,Raymond,Richard,Martin';

// let namesSplit = names.split(',');

// let firsLetter = namesSplit.map((letter) => letter[0]);

// console.log(...firsLetter);

//obj6

// let people =  [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//   ];


// let year = people.sort((a, b) => a.age - b.age );

// let young = year[0].age
// let old = year[year.length - 1].age;

// let different = old - young;
// console.log(different);

//obj7

// let numbers = [5,55,87,3,90,4,62];

// let even = numbers.filter((ev) => ev % 2 == 0 );
// console.log("Juft:",...even);
// let odd = numbers.filter((od) => od % 2 != 0);
// console.log("Toq:",...odd);

//obj8


// let repeat = numbers.reduce((acc,el) => {

// },0)


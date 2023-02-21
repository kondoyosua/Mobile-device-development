//Spread Operator
// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);
// console.log(...numbers);

//1. Duplikasi Array
// let numbers2 = [...numbers];
// numbers.push(6);
// console.log(numbers2);

//2. Menggabungkan Array

// let numbers1 = [1, 2, 3];
// let numbers2 = [5, 6, 7];
// let numbers3 = [8, 9, 10];

// let combineNumbers5 = numbers1.concat(4, numbers2, numbers3);
// let combineNumbers6 = [...numbers1, 4, ...numbers2, ...numbers3];
// console.log(combineNumbers5);
// console.log(...combineNumbers6);

// let john = {
//   fullName: "John Doe",
//   age: 35,
//   address: "Manado",
// };

// john = { ...john, job: "teacher" };
// console.log(john);

//Destructuring

let numbers = [1, 2, 3, 4, 5];

// let a = numbers[0];
// let b = numbers[1];
// let c = numbers[2];
// let d = numbers[3];
// let e = numbers[4];

// let [a, b, c, d, e] = numbers;
//Destrukturisasi array akan melihat urutan tiap elementnya
// let [, b, , d] = numbers;
// console.log(b);

let john = {
  fullName: "John Doe",
  age: 35,
  address: "Manado",
};

let { age: umur } = john;
console.log(umur);

//Halo nama saya John Doe, umur saya 35 tahun dan saya tinggal di Manado

const ucapkanSalam = ({ fullName }) => {
  let kalimat = `Halo nama saya ${fullName}`;
  console.log(kalimat);
};

ucapkanSalam(john);
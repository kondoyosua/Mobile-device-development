// String literal
let John = {
    fullname: 'john doe',
    age: 35,
    address: "Manado",

};

let kalimat5 = "Hallo, nama saya" + John.fullname + ", umur saya" + John.age + " tahun, dan sata tinggal di " + John.address;

let kalimat6 = `Hallo, nama saya ${John.fullname}, umur saya ${John.age}, tahun dan saya tinggal di ${John.address}`
// console.log(kalimat6);

// arrow function

const greetings = () => {
    return `helllo world`;
};
let result = greetings();
// console.log(result);

let numbers = [1, 2, 3, 4, 5]

let output = numbers.map ((value) => value + 5);
// console.log(output);

// default parameter

const login = (username, password = "12345") => {
    return `Username = ${ username}, Password = ${password}`;
};
let output2 = login("johndoe", "12345");
// console.log(output2);

// rest parameter dan spread operator
// rest parameter

const penjumlahanArray = (a, b, c, ...params) => {
    let result = params.map((value) => value);
    return result;

};
console.log(penjumlahanArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));
// // 1. A
// function helloWorld() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello World!");
//       }, 2000);
//     });
//   }
  
// // 1. B
// async function messages() {
//     let msg = await helloWorld();
//     console.log(msg);
//   }
  
// // 1. C
//   messages();


// // 2. A
// function ambilDataUser() {
//     fetch("https://reqres.in/api/users")

// // 2. c
//       .then((response) => {
//         return response.json();
//       })
//       .then((users) => {
//         console.log(users.data);
//       });
//   }
// // 2. C
// ambilDataUser();


// 3.
// async function ambilDataUser() {
//     try {
//       let response = await fetch("https://reqres.in/api/users");
//       let users = await response.json();
//       console.log(users.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

// ambilDataUser();
  

// 4.
const axios = require('axios');

async function ambilDataUser() {
  try {
    let response = await axios.get("https://reqres.in/api/users");
    console.log(response.data.data);
  } catch (error) {
    console.error(error);
  }
}

ambilDataUser();
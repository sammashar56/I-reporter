// const logform = document.getElementById('logform');

// const { email, password, btnLogin } = logform.elements;

// function PostData(type, userData) {
//   const baseUrl = 'http://127.0.0.1:5000/api/v2Auth/login';

//   return new Promise((resolve, reject) => {
//     fetch(baseUrl + type, { 
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-type': 'application/json',
//         'Access-Control-Allow-Origin':
//           'http://127.0.0.1:5000/api/v2',
//       },
//       body: JSON.stringify(userData),
//     })
//       .then(response => response.json())
//       .then((responseJson) => {
//         resolve(responseJson);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

// function GetData(type) {
//     const baseUrl = 'http://127.0.0.1:5000/api/v2';
  
//     return new Promise((resolve, reject) => {
//       fetch(baseUrl + type, {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//           'Content-type': 'application/json',
//           'Access-Control-Allow-Origin':
//             'http://127.0.0.1:5000/api/v2',
//           Authorization: `Bearer ${localStorage.getItem('data').toString()}`,
//         },
//       })
//         .then(response => response.json())
//         .then((responseJson) => {
//           resolve(responseJson);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

const url  = 'http://127.0.0.1:5000/api/v2/auth/login'

fetch(url)
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) {
  // Create and append the li's to the ul
  })
})
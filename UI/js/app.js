//fetching the i reporter api
// login and sign up
// const url = 'http://127.0.0.1:5000/api/v2/auth/signup'
// const registerUser = () => {
//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({
//         firstname:document.getElementById('firstname').value,  
//         lastname:document.getElementById('lastname').value,  
//         email: document.getElementById('email').value,
//         phoneNumber: document.getElementById('phoneNumber').value,
//         password: document.getElementById('password').value
//       }),
//       headers: {
//         'Content-type': 'application/json;'
//       }
//     })
//       .then(response => response.json())
//       .then(registerData => {
//         console.log(registerData)
  //       if (registerData.message == "Registration successful") {
  //         let user = sessionStorage.setItem("user",  document.getElementById('username').value);
  //         let token = sessionStorage.setItem("token", registerData.data[0].token);
  //         alert(registerData.message)
  //         console.log(user, token)
  //         window.location = "user-profile.html";
  //       } else {
  //         alert(registerData.error)
  //         alert(registerData.message)
  //       }
  //     })
  // }
  //console.log()
// const loginUser = () => {
//   fetch('http://127.0.0.1:5000/api/v2/auth/login', {
//     method: 'POST',
//     body: JSON.stringify({
//       username: document.getElementById('email').value,
//       password: document.getElementById('password').value
//     }),
//     headers: {
//       'Content-type': 'application/json;'
//     }
//   })
//     .then(response => response.json())
//     .then(loginData => {
//       console.log(loginData)
//       if (loginData.message == "successful") {
//         let user = document.getElementById('username').value;
//         sessionStorage.setItem('user', user);
//         let token = loginData.data[0].token;
//         sessionStorage.setItem('token', token)
//         alert(loginData.message)
//         window.location = "profile.html";
//       } else {
//         document.getElementById('error').innerHTML = loginData.error;
//         alert(loginData.error)
//         alert(loginData.message)
//       }
//     })
// }
// function helloUser(){
//   let user = sessionStorage.getItem('user');
//   document.getElementById('user').innerHTML = user;
//   console.log(user)
// }
  
const getincidents = () => {
  return fetch('http://127.0.0.1:5000/api/v2/incident')
  .then(res => res.json())
  .then(incidents => console.log(incidents))
  
}
console.log(getincidents())

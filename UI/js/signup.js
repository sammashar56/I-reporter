// const registerForm = document.getElementById(regform);

// const {
//     firstname,
//     lastname,
//     email,
//     phoneNumber,
//     password,
//     confirmPassword,
//     signupBtn,
// } = registerForm.elements;

// function postData (type, userdata){
//     const baseUrl = 'http://127.0.0.1:5000/api/v2'

//     return new Promise((resolve, reject) => {
//         fetch(baseUrl + type, {
//           method: 'POST',
//           mode: 'cors',
//           headers: {
//             Accept: 'application/json',
//             'Content-type': 'application/json',
//             'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/api/v2',
//           },
//           body: JSON.stringify(userData),
//         })
//           .then(response => response.json())
//           .then((responseJson) => {
//             resolve(responseJson);
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       });
//     }

//     signupBtn.addEventListener('click', (e) => {
//       e.preventDefault();
//       const data = {
//         first_name: firstName.value,
//         last_name: lastName.value,
//         email: emailId.value,
//         username: username.value,
//         phoneNumber: phoneNumber.value,
//         password: password.value,
//         confirm_password: confirmPassword.value,
//       };
//       PostData('/auth/signup', data).then((result) => {
//         console.log(result);
//         if (Response.status === 201) {
//           window.localStorage.setItem('message', result.message);
//         } else {
//           window.localStorage.setItem('errors', JSON.stringify(result.errors));
//         }

//         const err = document.getElementById('error');
//         if (result.status === 201) {
//           err.textContent = window.localStorage.getItem('message');
//         } else if ('errors' in result) {
//           const error = JSON.parse(window.localStorage.getItem('errors'));
//           console.log(error);
//           for (const key in error) {
//             switch (key) {
//               case 'first_name':
//                 err.textContent = 'First Name' + ' : ' + 'Invalid input';
//                 break;
//               case 'last_name':
//                 err.textContent = 'Last Name' + ' : ' + 'Invalid input';
//                 break;
//               case 'other_names':
//                 err.textContent = 'Other Names' + ' : ' + 'Invalid input';
//                 break;
//               case 'email':
//                 err.textContent = `${'Email' + ' : ' + 'Invalid input '}${error[key]}`;
//                 break;
//               case 'username':
//                 err.textContent = `${'Username' + ' : ' + 'Invalid input '}${error[key]}`;
//                 break;
//               case 'phonennumber':
//                 err.textContent = 'Phone Number' + ' : ' + 'Invalid input';
//                 break;

//               default:
//                 err.textContent = 'Invalid Input, please check that you have filled the fields correctly';
//                 break;
//             }
//           }
//         } else {
//           err.textContent = result.message;
//         }
//         const login_url = 'login.html';
//         const responseJson = result;
//         const status_code = responseJson.status;
// if (status_code === 201) {
//   window.location = login_url;
//         }
//       });
//     });

const signup = "http://127.0.0.1:5000/api/v2/auth/signup"; // basic url that is being fetched
document.getElementById("regform").addEventListener("signupBtn", postData); // an event litsener for the signupBtn
function postData() {
  // getting the basic inputs from the fields
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  fetch(signup, {
    method: "POST",
    mode: "cors",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    })
  })
    .then(res => res.json())
    .then(res_data => {
      console.log(res_data);
      if (res_data.status_code === 201) {
        window.href = "login.html";
      }
    })
    .catch(err => console.log(err));
}

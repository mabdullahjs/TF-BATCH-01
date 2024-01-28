import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./config.js";

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#form');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(email.value);
    // console.log(password.value);

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });

})

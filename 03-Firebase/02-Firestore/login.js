import { sendPasswordResetEmail, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./config.js";

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const forgot = document.querySelector('#forgot');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('email===>', email.value);
    console.log('password===>', password.value);

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location = 'home.html'
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
})


forgot.addEventListener('click', () => {
    const resetEmail = prompt('enter your email');
    sendPasswordResetEmail(auth, resetEmail)
        .then(() => {
            alert('email sent');
        })
        .catch((error) => {
            alert('Email not found');
        });
})
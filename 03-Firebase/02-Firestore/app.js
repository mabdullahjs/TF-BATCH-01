import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth, storage } from "./config.js";
import { ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js'



const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const profile = document.querySelector('#profile-image');
const storeimg = document.querySelector('#storeimg');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('email===>', email.value);
    console.log('password===>', password.value);
    console.log('password===>', firstname.value);
    console.log('password===>', lastname.value);

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location = 'login.html'
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });


})



function showUrl() {
    const files = profile.files[0]
    const storageRef = ref(storage, email.value);
    uploadBytes(storageRef, files).then(() => {
        getDownloadURL(storageRef).then((url) => {
            console.log(url);
        });
    });
}

storeimg.addEventListener('click' , showUrl)
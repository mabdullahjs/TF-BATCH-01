import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./config.js";



onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
    } else {
        window.location = 'index.html'
    }
});

const btn = document.querySelector('#logout');


btn.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            window.location = 'index.html';
        }).catch((error) => {
            alert('bhai masla ha koi')
            // console.log(error);
        });
})

// console.log('hello home');
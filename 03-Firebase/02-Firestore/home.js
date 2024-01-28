import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth, db } from "./config.js";
import { collection, addDoc, getDocs, Timestamp, query, orderBy, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


//checking user login or logout
let userUid;

const arr = [];

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;
        userUid = uid;

        const sortedQuery = query(collection(db, "todos"), orderBy('date', 'desc'));

        const querySnapshot = await getDocs(sortedQuery);
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            console.log(doc.data(), doc.id);
            const obj = {
                docId: doc.id,
                ...doc.data()
            }
            arr.push(obj);
            renderTodo()
        });
        console.log('arr===>', arr);

    } else {
        window.location = 'login.html'
    }
});


//logout user

const logout = document.querySelector('#logout');
logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location = 'login.html'
    }).catch((error) => {
        console.log(error);
    });

})


//add todo
const form = document.querySelector('#form');
const todoVal = document.querySelector('#todo-val');
const div = document.querySelector('#todo-render');



//render todo wala function
const renderTodo = () => {
    div.innerHTML = ''
    arr.map((item) => {
        div.innerHTML += `
        <div class="card w-96 bg-base-100 shadow-xl mt-3 mx-auto">
            <div class="card-body">
                <h2 class="card-title">${item.title}</h2>
                <div class="card-actions justify-end">
                    <button class="btn btn-error text-white" id="deleteTodo">Delete</button>
                    <button class="btn btn-success text-white" id="editTodo">Edit</button>
                </div>
            </div>
        </div>
        `
    })
    const deleteTodo = document.querySelectorAll('#deleteTodo')

    deleteTodo.forEach((item, index) => {
        item.addEventListener('click', async () => {
            await deleteDoc(doc(db, "todos", arr[index].docId));
            arr.splice(index, 1);
            renderTodo()
        })
    })
    const editTodo = document.querySelectorAll('#editTodo')

    editTodo.forEach((item, index) => {
        item.addEventListener('click', async() => {
            const updatedval = prompt('enter new value');
            const washingtonRef = doc(db, "todos", arr[index].docId);
            await updateDoc(washingtonRef, {
                title: updatedval
            });
            arr[index].title = updatedval;
            renderTodo();

        })
    })
}
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const obj = {
        title: todoVal.value,
        date: Timestamp.fromDate(new Date()),
        uid: userUid
    }
    arr.unshift(obj)
    renderTodo();
    try {
        const docRef = await addDoc(collection(db, "todos"), obj);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    todoVal.value = ''
})
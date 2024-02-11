// import { useState } from "react";

// export default function App() {
//   let [num, setNum] = useState(0);

//   function addNumber() {
//     setNum(num + 1);
//   }
//   return (
//     <div>
//       <h1>Hello world {num}</h1>
//       <button onClick={addNumber}>Add {num}</button>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam est beatae, fuga aspernatur dicta iure omnis nam fugiat sint quaerat nisi, ad iusto saepe modi, tempore consectetur repellat nesciunt! {num}</p>
//     </div>
//   );
// }

import React, { useState, useRef } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const input = useRef();

  const addTodo = (event) => {
    event.preventDefault();
    // todo.push(input.current.value);

    setTodo([...todo, input.current.value]);
    input.current.value = "";
    console.log(todo);
  };

  const deleteTodo = (index) => {
    console.log("value deleted", index);
    todo.splice(index, 1);
    setTodo([...todo]);
  };
  const editTodo = (index) => {
    console.log("value edited", index);
    // const updated = prompt('enter new Value');
    // todo.splice(index , 1 , updated);
    // todo[index] = updated
    setTodo([...todo]);
  };
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="enter todo" ref={input} />
        <button type="submit">AddTodo</button>
      </form>

      <ul>
        {todo.length > 0 ? (
          todo.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button onClick={() => deleteTodo(index)}>Delete</button>
                <button onClick={() => editTodo(index)}>edit</button>
              </li>
            );
          })
        ) : (
          <h1>No items found..</h1>
        )}
      </ul>
    </>
  );
};

export default App;

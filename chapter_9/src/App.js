import React from "react-bootstrap";
//import Products from "./Products";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form, Button } from "react-bootstrap/lib/Navbar";
import Github from "./GitHub";




function App() {

  function todosReducer(state, action) {
    switch (action.type) {
      case 'get':
        return { ...state, todos: action.payload }
      case 'add':
        const newToDo = { id: uuidv4(), text: action.payload }
        const addedToDos = [...state.todos, newToDo]
        return { ...state, todos: addedToDos }


        const todosInitialState = {
          todos: [],
        }

        return (
          <div>
            <Github />
          </div>
        )
    }
  }
}

    export default App;
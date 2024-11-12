import React, { useContext, useState, useEffect } from 'react'
import { TodosContext } from './App'
import { Table, Form, Button } from 'react-bootstrap'
import useAPI from './useAPI'

function ToDoList() {
    const { state, dispatch } = useContext(TodosContext);
    const [todoText, setTodoText] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [editTodo, setEditTodo] = useState(null)
    const buttonTitle = editMode ? "Edit" : "Add";
    const endpoint = "http://localhost:3000/todos/"
    const savedTodos = useAPI(endpoint)
    useEffect(() => {
        dispatch({ type: "get", payload: savedTodos })
    }, [savedTodos]) // dispatch whoever savedTodos changes
}

export default ToDoList;
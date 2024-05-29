import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [showTodos, setShowTodos] = useState(false); 

    useEffect(() => {
        axios.get('http://localhost:4000/api/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    const addTodo = (title) => {
        axios.post('http://localhost:4000/api/todos', { title })
            .then(response => setTodos([...todos, response.data]))
            .catch(error => console.error(error));
    };

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:4000/api/todos/${id}`)
            .then(() => setTodos(todos.filter(todo => todo._id !== id)))
            .catch(error => console.error(error));
    };

    const updateTodo = (id, newTitle) => {
        axios.put(`http://localhost:4000/api/todos/${id}`, { title: newTitle })
            .then(response => {
                const updatedTodos = todos.map(todo => 
                    todo._id === id ? response.data : todo
                );
                setTodos(updatedTodos);
            })
            .catch(error => console.error(error));
    };

    const handleShowTodos = () => {
        setShowTodos(!showTodos); 
    };

    return (
        <div className="p-4 bg-gradient-to-darker-gray min-h-screen">
            <h1 className="text-2xl text-yellow-400 mb-4">Todo List</h1>
            <AddTodo addTodo={addTodo} />
            <button 
                onClick={handleShowTodos} 
                className="mb-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                {showTodos ? 'Hide list' : 'Show list'}
            </button>
            {showTodos && (
                <ul className="space-y-2">
                    {todos.map(todo => (
                        <li key={todo._id}>
                            <TodoItem todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoList;

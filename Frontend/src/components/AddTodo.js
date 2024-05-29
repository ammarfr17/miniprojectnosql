import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (title) {
            addTodo(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={onSubmit} className="flex space-x-2 mb-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new To Do List"
                className="flex-1 p-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500"
            />
            <button type="submit" className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Add
            </button>
        </form>
    );
};

export default AddTodo;

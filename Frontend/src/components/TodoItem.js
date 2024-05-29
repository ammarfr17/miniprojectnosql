import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTodo(todo._id, newTitle);
        setIsEditing(false);
    };

    return (
        <div className="relative flex justify-between items-center p-2 bg-gray-700 rounded mb-2">
            {isEditing ? (
                <form onSubmit={handleUpdate} className="flex-1 flex items-center">
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="flex-1 p-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white p-1 rounded hover:bg-blue-700 ml-2"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-500 text-white p-1 rounded hover:bg-gray-700 ml-2"
                    >
                        Cancel
                    </button>
                </form>
            ) : (
                <span className="flex-1 min-w-0 text-white">{todo.title}</span>
            )}
            <div className="flex gap-2">
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-green-500 text-white p-1 rounded hover:bg-green-700"
                    >
                        Update
                    </button>
                )}
                <button
                    onClick={() => deleteTodo(todo._id)}
                    className="bg-red-600 text-white p-1 rounded hover:bg-red-700"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;

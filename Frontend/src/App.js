import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';

const App = () => {
    return (
        <div className="dark bg-gradient-to-darker-gray min-h-screen">
            <nav className="bg-gradient-to-lighter-gray p-4 mb-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-yellow-400 text-lg font-bold">My To-Do</div>
                    <ul className="flex space-x-4 text-yellow-400">
                        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#profile" className="hover:text-gray-300">Profile</a></li>
                        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
            </nav>
            
            <Router>
                <Routes>
                    <Route path="/" element={<TodoList />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://muhammadrifkipratama:G4pIp6EYAPEwDETy@netlab.tahq0qe.mongodb.net/Modul9SBD');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('Connected to MongoDB Muhammad Rifki Pratama');
});

const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
});

const Todo = mongoose.model('Todo', TodoSchema);

app.post('/api/todos', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        completed: false,
    });
    await todo.save();
    res.send(todo);
});

app.get('/api/todos', async (req, res) => {
    const todos = await Todo.find();
    res.send(todos);
});

app.delete('/api/todos/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.send(result);
});

app.put('/api/todos/:id', async (req, res) => {
    const { title } = req.body;
    const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        { title },
        { new: true }
    );
    res.send(todo);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

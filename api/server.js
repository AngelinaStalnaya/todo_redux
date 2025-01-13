import express, { json } from "express";
import cors from "cors";
import { nanoid } from "nanoid";

const PORT = 5000;

const app = express();
app.use(cors());
app.use(json());

const todos = [
  { id: nanoid(), title: "todo 1", completed: false },
  { id: nanoid(), title: "todo 2", completed: false },
  { id: nanoid(), title: "todo 3", completed: false },
  { id: nanoid(), title: "todo 4", completed: false },
];

app.get("/todos", (req, res) => res.send(todos));

app.post('/todos', (req,res) => {
    const newTodo = {
        id: nanoid(),
        title: req.body.title,
        completed: req.body.completed
    };
    todos.push(newTodo);
    return res.send(newTodo);
});

app.patch('/todos/:id', (req,res) => {
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id === id);
    const completed = Boolean(req.body.completed);

    todos[index].completed =  completed;

    return res.send(todos[index]);
});

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id === id);
    
    todos.splice(index, 1);

    return res.send(todos);
});

app.listen(PORT, console.info(`Server is running on port ${PORT}`));

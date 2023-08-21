import React, { useState } from "react";
import { Container, Typography, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import AddTodo from "./components/AddTodo";
import UpdateTodo from "./components/UpdateTodo";
import DeleteTodo from "./components/DeleteTodo";
import "./App.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo 1", completed: false },
    { id: 2, text: "Todo 2", completed: false },
  ]);
  // const [emptyTodoError, setEmptyTodoError] = useState(false);

  const handleAddTodo = (text) => {
    if (text.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: text,
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
      // setEmptyTodoError(false);
    }
    // else {
    //   setEmptyTodoError(true);
    // }
  };

  const handleUpdateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const handleDeleteTodo = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (confirmDelete) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  // const handleSnackbarClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setEmptyTodoError(false);
  // };

  return (
    <Container className="container flex items-center">
      <div className="todo flex  flex-col items-center gap-y-4 my-8 p-4 border-blue-500 border-2 bg-blue-100">
        <Typography variant="h4">CRUD Todo App</Typography>
        <AddTodo onAddTodo={handleAddTodo} />
        {/* <Snackbar
          open={emptyTodoError}
          autoHideDuration={2000}
          onClose={handleSnackbarClose}
        >
          <Alert severity="error">You cannot add an empty todo!</Alert>
        </Snackbar> */}
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="todo-item grid grid-cols-3 grid-rows-1 gap-x-4"
          >
            {/* <div className="flex items-center"> */}
            <UpdateTodo todo={todo} onUpdateTodo={handleUpdateTodo} />
            <DeleteTodo todo={todo} onDeleteTodo={handleDeleteTodo} />
            {/* </div> */}
          </div>
        ))}
      </div>
    </Container>
  );
}
export default App;

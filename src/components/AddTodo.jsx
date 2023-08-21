import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

function AddTodo({ onAddTodo }) {
  const [newTodoText, setNewTodoText] = useState("");
  const [emptyTodoError, setEmptyTodoError] = useState(false);

  const handleNewTodoChange = (e) => {
    setNewTodoText(e.target.value);
    setEmptyTodoError(false);
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      onAddTodo(newTodoText);
      setNewTodoText("");
      setEmptyTodoError(false);
    } else {
      setEmptyTodoError(true);
      setTimeout(() => {
        setEmptyTodoError(false);
      }, 2000);
    }
  };

  return (
    <div className="add flex items-center gap-x-4">
      <TextField
        type="text"
        value={newTodoText}
        onChange={handleNewTodoChange}
        placeholder="New Todo ..."
      />
      <Button onClick={handleAddTodo} variant="contained" className="btn">
        Add Todo
      </Button>
      {emptyTodoError && (
        <Typography color="error">You cannot add an empty todo!</Typography>
      )}
    </div>
  );
}

export default AddTodo;

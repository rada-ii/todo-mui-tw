import { useState } from "react";
import { TextField, Button } from "@mui/material";

function UpdateTodo({ todo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    if (text.trim() !== "") {
      onUpdateTodo(todo.id, text);
      setIsEditing(false);
    }
  };

  return (
    <div className="update-todo flex gap-x-8  items-center justify-between row-span-1 col-start-1 col-span-2  ">
      {isEditing ? (
        <div className="flex gap-x-4 justify-stretch items-end ">
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="update"
          />
          <Button onClick={handleUpdate} variant="contained" className="btn">
            Update
          </Button>
        </div>
      ) : (
        <>
          <p className="txt">{text}</p>
          <Button onClick={handleEditClick} variant="outlined">
            Edit
          </Button>
        </>
      )}
    </div>
  );
}

export default UpdateTodo;

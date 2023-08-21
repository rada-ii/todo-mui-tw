import { Button } from "@mui/material";

function DeleteTodo({ todo, onDeleteTodo }) {
  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <div className="delete-todo col-start-3 self-end">
      <Button onClick={handleDelete} variant="contained" className="btn">
        Delete
      </Button>
    </div>
  );
}

export default DeleteTodo;

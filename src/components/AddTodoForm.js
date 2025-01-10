import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(
        addTodo({
          title: value,
        })
      );
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="name_todo_input">Todo name</label>
      <input
        type="text"
        placeholder="Add todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="name_todo_input"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTodoForm;

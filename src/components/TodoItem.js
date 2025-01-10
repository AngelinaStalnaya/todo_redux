import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteTodo } from '../redux/todoSlice';

const TodoItem = ({id, title, completed}) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleCompleteTodo({id, completed: !completed}));
  };

  const handleTodoDelete = () => {
    dispatch()
  }

  return (
    <li>
      <div>
        <input type='checkbox' onClick={handleCheckboxClick} checked={completed}/>
        {title}
      </div>
      <button onClick={handleTodoDelete}>Delete</button>
    </li>
  )
}

export default TodoItem
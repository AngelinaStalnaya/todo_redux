import CheckboxInput, { CheckboxInputProps } from "./CheckboxInput";

const CheckboxInputList = ({todos}: {todos: Array<CheckboxInputProps>}) => {
  const todoList = todos.map((todo, index) => <CheckboxInput text={todo.text} id={todo.id} key={index}/>)
  
  return (
    <>{todoList}</>
  )
}

export default CheckboxInputList;
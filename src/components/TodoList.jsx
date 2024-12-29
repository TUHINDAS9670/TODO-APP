import React, { useState } from "react";
import'../App.css'

const TodoList = ({value,indexNumber,todoList,setTodoList}) => {
  const [check,setCheck]=useState(false)
  const deleteTask = () => {
    let updatedTodoList =  todoList.filter((value, index) => {
      return index != indexNumber
    });
  
    
    setTodoList(updatedTodoList);
  };
  const checkhandler=()=>{
setCheck(!check);
  }
  return (
    <li className={check? "checked":""} onClick={checkhandler}>
      {`${indexNumber+1}. ${value}`}
      <span onClick={deleteTask}>&times;</span>
    </li>
  );
};


export default TodoList;

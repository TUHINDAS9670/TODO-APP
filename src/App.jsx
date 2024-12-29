import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
function App() {
  // const [todoList, setTodoList] = useState([]);//usestate before using localstorage
  //setting up localstorage
  let getlocalStorage = () => {
    let todoList = localStorage.getItem("todoList");
    if (todoList) {
      return (todoList = JSON.parse(localStorage.getItem("todoList")));
    } else {
      return [];
    }
  };
  let [todoList, setTodoList] = useState(getlocalStorage()); //usestate after using localstorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);


  const createTodo = (event) => {
    const input = event.target.input.value;
    if (!input) alert("Please enter a task first");
    else {
      if (!todoList.includes(input)) {
        //if same task is not present
        const newTodo = [...todoList, input]; //this lines means that enhance the todolist array it means add input (come from event) along with prevrious items that are already present in todolist array
        setTodoList(newTodo);
      } else {
        alert("This task is already exist in TODO list !...!...!");
      }
    }

    event.preventDefault();
  };
  const list = todoList.map((value, index) => {
    return (
      <TodoList
        value={value}
        key={index}
        indexNumber={index}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });

  // set on localstorage

  return (
    <>
      <div className="App">
        <h1>Get Things Done!</h1>
        <form action="/" method="post" onSubmit={createTodo}>
          <input
            type="text"
            className="input"
            name="input"
            placeholder="What is the task today?"
          />
          <button type="submit" className="btn">
            ADD TASK
          </button>
        </form>
        <div className="tasklists">
          <ul>{list}</ul>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";

const Todo = () => {
  const [todoTask, setTodoTask] = useState([]);
  const [addTodoTask, setAddTodoTask] = useState("");
  const [id, setId] = useState(0);

  const addTodo = () => {
    setId(id + 1);
    if (addTodoTask == "") {
    } else {
      const myJson = { Id: id, Value: addTodoTask, checked: false };
      console.log(id);
      todoTask.push(myJson);
      setTodoTask(todoTask);
      setAddTodoTask("");
    }
  };

  const removeTask = (remove) => {
    console.log(remove.target.value);

    const arr = todoTask.filter((item) => item.Id != remove.target.value);

    arr.forEach((o) => {
      console.log(o);
    });
    setTodoTask(arr);
  };

  return (
    <div className="TodoForm">
      <div className="InputDiv">
        <input
          value={addTodoTask}
          type="text"
          className="TodoInput"
          placeholder="What's your task?"
          onChange={(e) => setAddTodoTask(e.target.value)}
        />

        <button className="Btn" onClick={addTodo}>
          Add task
        </button>
      </div>

      <ul className="TodoTasks">
        {" "}
        {todoTask.map((item) => (
          <li>
            {item.Value}
            <input value={item.Id} type="checkBox" className="CheckBoxBtn" />

            <button
              className="Btn"
              value={item.Id}
              onClick={(e) => {
                removeTask(e);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

// <ul>
// {todoTask.map((item) => (
//  <li>
//    {item}
//    <input type="checkBox" />
//    <button
//    value={item}
//  onClick={(e) => {
//  removeTask(e);
//}}
//>
//Remove task
//</button>
//</li>
//))}
//</ul>

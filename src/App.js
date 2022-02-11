import React, { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";
import "./index.css"

function App(props) {
  const [filter, setFilter] = useState('All');

  const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);  

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(userInput) {
    let newTask = [...tasks]
    newTask = [...newTask, { id: "todo-" + nanoid(), name: userInput, completed: false }];
    setTasks(newTask);
  }

  <Form addTask={addTask} />

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
   
  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }  

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
  />
));

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';

  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div>
      <h1>To-Do List</h1>
      <Form addTask />
      <div>
      {filterList}
      </div>
      <h2>{headingText}</h2>
      <ul>
        {taskList}
      </ul>
    </div>
  );
}

export default App;
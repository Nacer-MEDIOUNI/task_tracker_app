import { useState } from "react";
import React from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from "./Components/AddTask";

function  App() {
    const [tasks, setTasks] = useState([
    { id: 1, text: "Your first task", day: "02/21/2022 at 2pm", reminder: false },

    { id: 2, text: "Your second task", day: "02/22/2022 at 3pm", reminder: false },

    { id: 3, text: "Your third task", day: "02/23/2022 at 11am ", reminder: false },
  ]);

//Show the form template
  const [showAddTask, setShowAddTask]= useState (false);

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*1000)+1;
  const newTask= {id, ...task}

  setTasks( [...tasks, newTask] )}

  //Delete Task
  const deleteTask = (id) => {
    setTasks (tasks.filter( (task) => task.id !==id ))}

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map( (task)=> task.id === id ? {...task, reminder: !task.reminder} : task ))
  }

  return (
    <div className="container">
    <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} />
    {showAddTask && <AddTask onAdd={addTask}  />}
    {tasks.length > 0 ?  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    :'No Tasks to Show'} 
    </div>
  );
}

export default App

// https://www.youtube.com/watch?v=w7ejDZ8SWv8
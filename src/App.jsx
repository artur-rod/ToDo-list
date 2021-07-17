import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import "./App.css";
import Header from './components/Header';
import Tasks from './components/Tasks';
import Addtask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {...task, completed: !task.completed}

      return task;
    })
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      {
        id:uuidv4(),
        title: taskTitle,
        completed: false,
      }
    ];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  return (
    <Router>
      <div className="container">
        <Header />
          <Route path="/" exact render={() => (
            <>
              <Addtask handleTaskAddition={handleTaskAddition} />
              <Tasks 
                tasks={tasks}   
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )} />
          <Route path="/:taskTitle" component={TaskDetails} />
      </div>
    </Router>
  )
};
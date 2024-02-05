import React, { useState } from 'react';
import './App.css';



function App() {
  const [clientName, setClientName] = useState('');
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = () => {
    const trimmedInput = taskInput.trim();

    if (trimmedInput !== '') {
      setTasks([...tasks, trimmedInput]);
      setTaskInput('');
    } else {
      alert('Введите задачу');
    }
  };

  const toggleCompleted = (index) => {
    const newCompletedTasks = [...completedTasks];
    const taskToToggle = tasks[index];

    if (newCompletedTasks.includes(taskToToggle)) {
      newCompletedTasks.splice(newCompletedTasks.indexOf(taskToToggle), 1);
    } else {
      newCompletedTasks.push(taskToToggle);
    }

    setCompletedTasks(newCompletedTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleCompletedAll = () => {
    const allTasksCompleted = tasks.every(task => completedTasks.includes(task));
    
    if (allTasksCompleted) {
      setCompletedTasks([]);
    } else {
      setCompletedTasks([...tasks]);
    }
  };

  return (
    <div className="todo-container">
      <div className="input-container">
        <h1>To-Do List</h1>
        <div className="forName">
          <h2>What's up, {clientName && `${clientName},`}</h2>
          <input
            type="text"
            id="clientName"
            placeholder="Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <input
          type="text"
          id="taskInput"
          placeholder="Add a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
      </div>
      <ul id="taskList">
        {tasks.map((task, index) => (
          <li key={index} className={completedTasks.includes(task) ? 'completed' : ''}>
            <span className="task-text">{task}</span>
            <div className="task-actions">
              <button className="toggle-button" onClick={() => toggleCompleted(index)}>
                Toggle
              </button>
              <button className="remove-button" onClick={() => removeTask(index)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="check-container">
        <div className="buis-pers">
          <div className="buisness">
            <input type="checkbox" id="buisnessCheckbox" name="myCheckbox" value="checked" className="custom-checkbox" />
            <label htmlFor="buisnessCheckbox" className="checkbox-container"></label>
          </div>
          <div className="personal">
            <input type="checkbox" id="personalChekbox" name="myCheckbox" value="checked" className="custom-checkbox" />
            <label htmlFor="personalChekbox" className="checkbox-container"></label>
          </div>
        </div>
        <button id="addButton" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="options">
        <button id="second" onClick={() => setTasks([])}>
          Clear All
        </button>
        <button id="third" onClick={toggleCompletedAll}>
          Toggle Completed
        </button>
      </div>
    </div>
  );
}

export default App;

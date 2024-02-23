import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const ToDoList = () => {
	const [task, setTask] = useState('');
	const [tasksList, setTasksList] = useState([]);
  
	// Function to handle adding tasks
	const handleAddTask = () => {
	  if (task.trim() !== '') {
		setTasksList([...tasksList, task]);
		setTask('');
	  }
	};
  
	// Function to handle deleting tasks
	const handleDeleteTask = (index) => {
	  const updatedTasks = tasksList.filter((_, i) => i !== index);
	  setTasksList(updatedTasks);
	};
  
	// Function to handle task input change
	const handleTaskChange = (event) => {
	  setTask(event.target.value);
	};
  
	return (
	  <div className="todo-container"> {/* Wrapping everything inside a container for centering */}
		<h1 className="todo-title">To do list</h1>
		<div className="input-container"> {/* Adding a container for input field */}
		  <input
			type="text"
			placeholder="What needs to be done?"
			value={task}
			onChange={handleTaskChange}
			onKeyPress={(event) => {
			  if (event.key === 'Enter') {
				handleAddTask();
			  }
			}}
		  />
		  <button className="add-button" onClick={handleAddTask}>+</button> {/* Adding a button for adding tasks */}
		</div>
		{tasksList.length === 0 ? (
		  <p>No tasks, add a task</p>
		) : (
		  <ul className="task-list">
			{tasksList.map((task, index) => (
			  <li key={index}>
				<div className="task-container"> {/* Adding container for task with border */}
				  <span>{task}</span>
				  <span
					className="delete-icon"
					onClick={() => handleDeleteTask(index)}
				  >
					&#x2716;
				  </span>
				</div>
			  </li>
			))}
		  </ul>
		)}
		<p className="task-count">{tasksList.length} tasks remaining</p> {/* Displaying number of tasks remaining */}
	  </div>
	);
  };
  
  export default ToDoList;
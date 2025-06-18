import { useState, useMemo } from 'react'; // Import useMemo
import './App.css';
import { FaTrash } from 'react-icons/fa'; // Uncomment and ensure react-icons is installed

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
    setError(''); // Clear error when user starts typing
  };

  // Function to add a new task
  const handleAddTask = () => {
    if (newTask.trim() === '') {
      setError('Task cannot be empty!');
      return;
    }

    const newTaskObject = {
      id: Date.now(), // Unique ID for the task
      text: newTask,
      completed: false, // Tasks are not completed by default
    };

    // Add the new task to the tasks array without sorting here
    setTasks(prevTasks => [...prevTasks, newTaskObject]);
    setNewTask(''); // Clearing the input field
    setError(''); // Clearing any error messages
  };

 
  const handleDeleteTask = (idToDelete) => {
    // Filter out the task with the given id, no sorting here either
    setTasks(prevTasks => prevTasks.filter(task => task.id !== idToDelete));
  };

  // Useing useMemo to memoize the sorted tasks array.
  // This  will only re-run if the 'tasks' array itself changes.
  const sortedTasks = useMemo(() => {
    
    return [...tasks].sort((a, b) => {
      const textA = a.text.toLowerCase();
      const textB = b.text.toLowerCase();
      if (textA < textB) {
        return -1;
      }
      if (textA > textB) {
        return 1;
      }
      return 0;
    });
  }, [tasks]); // Dependency array: re-run memoization only when 'tasks' changes

  return (
    <div className="todo-container">
      <h1>My To-Do List </h1>
      <div className="task-input-section">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddTask();
            }
          }}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="tasks-list">
        {tasks.length === 0 ? ( // Still check original tasks length for "No tasks yet" message
          <p className="no-tasks">No tasks yet. Add some!</p>
        ) : (
          // Map over the memoized sortedTasks array for rendering
          sortedTasks.map(task => (
            <div key={task.id} className="task-item">
              <span>{task.text}</span>
              <button
                className="delete-button"
                onClick={() => handleDeleteTask(task.id)}
              >
                <FaTrash /> 
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
































// import { useState } from 'react'
// import ToDoInput from './components/ToDoInput'
// import ToDoList from './components/ToDoList'
// import './App.css'

// let todos = [];

// function App() {


//   const [todos, setTodos] = useState([])
//   const [newTodoText, setNewTodoText] = useState("");

  // const AddTodo = () => {
  //   if (newTodoText.trim() !== "") return;
  
  //   new todo object created

  //   const newTodo = {
  //     id: Date.now().toString(), // Simple unique ID
  //     title: newTodoText.trim()
  //    const newtodos = [...todos, newTodoText.trim()];
  //    newtodos.sort((a, b) => a.localeCompare(b)); // Sort alphabetically
  //   // };
  //   // Correct: Update state by creating a NEW array
  //   setTodos(newtodos);
  //   // Correct: Clear the input field state
  //   setNewTodoText("");
  // };

// //   const DeleteTodo = (idTodelete) => {
// //     setTodos((prevTodos) => {prevTodos.filter(todo => todo.id !== idToDelete)});
   
// //     };

// //   const sortedTodos = [...todos].sort((a, b) => a.text.localeCompare(b.text));
// //   return (
// //    <div  className="  w-screen h-screen bg-grey-100 p-6 rounded-xl flex flex-col items-center justify-center space-y-4 shadow-lg  mx-auto mt-10 mb-10 font-sans border border-grey-200 ">
// //       <h1 >To-Do List</h1>
// //       <ToDoInput newTodoText={newTodoText} setNewTodoText={setNewTodoText} AddTodo={AddTodo} />


// //       <ToDoList sortedTodos={sortedTodos}
// //                 DeleteTodo={DeleteTodo} />  
// //       <h3> get set go!</h3>
// //    </div>
// //   )
// // }
// // export default App;
// import { useState } from 'react';
// import './App.css';
// // import { FaTrash } from 'react-icons/fa';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [error, setError] = useState('');
  
//   const sortTasksAlphabetically = (tasksArray) => {
//     return [...tasksArray].sort((a, b) => {
//       const textA = a.text.toLowerCase();
//       const textB = b.text.toLowerCase();
//       if (textA < textB) {
//         return -1;
//       }
//       if (textA > textB) {
//         return 1;
//       }
//       return 0;
//     });
//   };

//   const handleInputChange = (e) => {
//     setNewTask(e.target.value);
//     setError('');
//   };

//   // Function to add a new task
//   const handleAddTask = () => {
//     if (newTask.trim() === '') {
//       setError('Task cannot be empty!');
//       return;
//     }

//     const newTaskObject = {
//       id: Date.now(),
//       text: newTask,
//       completed: false,
//     };

//     const updatedTasks = sortTasksAlphabetically([...tasks, newTaskObject]);
//     setTasks(updatedTasks);
//     setNewTask('');
//     setError('');
//   };

//   // Function to delete a task
//   const handleDeleteTask = (idToDelete) => {
//     // Filter out the task with the given id
//     const remainingTasks = tasks.filter(task => task.id !== idToDelete);
//     const updatedTasks = sortTasksAlphabetically(remainingTasks);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="todo-container">
//       <h1>My To-Do List Webapp</h1>
//       <div className="task-input-section">
//         <input
//           type="text"
//           placeholder="Add a new task..."
//           value={newTask}
//           onChange={handleInputChange}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') {
//               handleAddTask();
//             }
//           }}
//         />
//         <button onClick={handleAddTask}>Add Task</button>
//       </div>

//       {error && <div className="error-message">{error}</div>}

//       <div className="tasks-list">
//         {tasks.length === 0 ? (
//           <p className="no-tasks">No tasks yet. Add some!</p>
//         ) : (
//           tasks.map(task => (
//             <div key={task.id} className="task-item">
//               <span>{task.text}</span>
//               <button
//                 className="delete-button"
//                 onClick={() => handleDeleteTask(task.id)}
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default App
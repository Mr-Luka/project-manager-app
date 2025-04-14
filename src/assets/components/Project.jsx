import {useState} from 'react';
import { convertDate } from '../utils/convertDate.js';

export default function Project({title, description, date, deleteProject}){
  const [ tasks, setTasks ] = useState([]);
  const [ newTask, setNewTask ] = useState('');

  const convertedDate = convertDate(date);

  function handleInput(e){
    setNewTask(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    if(newTask.trim() !== ''){
      setTasks(prevTask=> [...prevTask, newTask]);
      setNewTask('');
    }
  }

  function clearTask(taskIndex) {
    const filteredTasks = tasks.filter((_, index)=> index !== taskIndex)
    setTasks(filteredTasks)
  }
 
    return (
        <div className='project'>
          <div className='title-and-button'>
            <h1>{title}</h1>
            <button onClick={deleteProject}>Delete</button>
          </div>
          <p>{convertedDate}</p>
          <p>{description}</p>
          <hr></hr>
          <h2>Tasks</h2>
          <form onSubmit={handleSubmit}>
            <div className="tasks">
            <input onChange={handleInput}></input>
            <button type='submit'>Add Task</button>
          </div>
          <ol className={`tasks-ol ${tasks.length > 0 ? 'active-tasks' : ''}`}>
            {tasks.length > 0 ? (tasks.map((task, taskIndex) => (
      <li key={taskIndex}><p>{task}</p><button onClick={()=> clearTask(taskIndex)}>Clear</button></li>
    ))) : <li>This project does no have any tasks yet.</li>}
          </ol>
          </form>
        </div>
    )
}
import {useState} from 'react';
import { convertDate } from '../utils/convertDate.js';

export default function Project({title, description, date, remove}){
  const [inputTask, setInputTask] = useState('');
  const [taskData, setTaskData] = useState([]);

  const formattedDate = convertDate(date);

  function handleInput(e){
    setInputTask(e.target.value);
  }

  function handleSubmitForm(e){
    e.preventDefault();
    if(inputTask.trim() !== ''){
      setTaskData(prevData => {
        return [...prevData, inputTask];
      })
    }
    setInputTask('');
  }

  function deleteTask(keyIndex){
    const updatedTaskArray = taskData.filter((task, taskIndex) => task[taskIndex] !== task[keyIndex]);
    setTaskData(updatedTaskArray);
  }

    return (
        <div className='project'>
          <div className='title-and-button'>
            <h1>{title}</h1>
            <button onClick={remove}>Delete</button>
          </div>
          <p>{formattedDate}</p>
          <p>{description}</p>
          <hr></hr>
          <h2>Tasks</h2>
          <form onSubmit={handleSubmitForm}>
            <div className="tasks">
            <input onChange={handleInput} value={inputTask}></input>
            <button type='submit'>Add Task</button>
          </div>
          <ol className={`tasks-ol ${taskData.length > 0 ? 'active-tasks' : ''}` }>
            {taskData.length > 0
            ?
              (taskData.map((task, taskIndex)=> 
              <li key={taskIndex}><p>{task}</p><button onClick={()=> deleteTask(taskIndex)}>Delete</button></li> ))
            : 
              (<li>This project does no have any tasks yet.</li>)
            }
          </ol>
          </form>
        </div>
    )
}
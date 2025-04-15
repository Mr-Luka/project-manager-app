import {useState} from 'react';
import { convertDate } from '../utils/convertDate.js';

export default function Project(){

    return (
        <div className='project'>
          <div className='title-and-button'>
            <h1>Title</h1>
            <button>Delete</button>
          </div>
          <p>Date</p>
          <p>Description</p>
          <hr></hr>
          <h2>Tasks</h2>
          <form>
            <div className="tasks">
            <input></input>
            <button type='submit'>Add Task</button>
          </div>
          <ol className='tasks-ol'>
            <li>This project does no have any tasks yet.</li>
          </ol>
          </form>
        </div>
    )
}
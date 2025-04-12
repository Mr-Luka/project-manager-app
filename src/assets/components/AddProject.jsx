// Component function that will gather users input, name of the project, descriptipon
// and due date.
export default function AddProject({cancel, submitForm, handleInput}){
  
    return (
        <>
        <div className="projects-form">
          <form onSubmit={submitForm}>
          <div className='cancel-save' >
            <button type='button' onClick={cancel}>Cancel</button>
            <button type='submit'>Save</button>
          </div>
            <label>TITLE</label>
            <input 
              id='title'
              name="title"
              type='text' 
              onChange={handleInput}></input>
            <label>DESCRIPTION</label>
            <textarea 
              id='description'
              name="description"
              onChange={handleInput}></textarea>
            <label>DUE DATE</label>
            <input
              id='dueDate'
              name="dueDate"
              type='date' 
              onChange={handleInput}></input>
          </form>
        </div>
        </>
    )
}
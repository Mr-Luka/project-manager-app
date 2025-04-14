export default function AddProject({submitForm, input, cancel}){
    return (
        <>
        <div className="projects-form">
          <form onSubmit={submitForm}>
          <div className='cancel-save' >
            <button type='button' onClick={cancel}>Cancel</button>
            <button type='submit'>Save</button>
          </div>
            <label></label>
            <input 
              id='title'
              name="title"
              type='text' 
              onChange={input}
            ></input>
            <label>DESCRIPTION</label>
            <textarea 
              id='description'
              name="description"
              onChange={input}
            ></textarea>
            <label>DUE DATE</label>
            <input
              id='dueDate'
              name="dueDate"
              type='date' 
              onChange={input}
            ></input>
          </form>
        </div>
        </>
    )
}
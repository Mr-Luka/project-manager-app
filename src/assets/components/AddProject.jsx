export default function AddProject(){
    return (
        <>
        <div className="projects-form">
          <form>
          <div className='cancel-save' >
            <button type='button'>Cancel</button>
            <button type='submit'>Save</button>
          </div>
            <label></label>
            <input 
              id='title'
              name="title"
              type='text' 
            ></input>
            <label>DESCRIPTION</label>
            <textarea 
              id='description'
              name="description"
            ></textarea>
            <label>DUE DATE</label>
            <input
              id='dueDate'
              name="dueDate"
              type='date' 
            ></input>
          </form>
        </div>
        </>
    )
}
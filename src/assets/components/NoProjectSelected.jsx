import picture from '../no-projects.png';

export default function NoProjectSelected({onClick}){

    return (
        <div className='no-project-selected'>
            <img src={picture} alt="No projects selected" />
            <h3>No Project Selected</h3>
            <p>Select a project or get started with a new one</p>
            <button onClick={onClick}>Create new project</button>
        </div>
    )
}
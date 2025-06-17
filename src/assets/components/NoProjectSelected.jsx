import noteBookImage from '../no-projects.png';
// when there are no projects
export default function NoProjectSelected({createProject}){

    return (
        <div className='no-project-selected'>
            <img src={noteBookImage} alt="No projects selected" />
            <h3>No Project Selected</h3>
            <p>Select a project or get started with a new one</p>
            <button onClick={createProject}>Create new project</button>
        </div>
    )
}
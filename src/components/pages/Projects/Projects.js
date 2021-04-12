import React from 'react'
import projectList from './ProjectsList';

const Projects = () => {
    const projects = projectList.map((index,item)=>{
        return(
            <div>
                hello
            </div>
        );
    });
    return (
        <div>
            Hello
        </div>
    )
}

export default Projects

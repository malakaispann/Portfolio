import { memo } from 'react';
import TextContainer from '../small/TextContainer';
import Project from '../small/Project';

// Project Data
import data from '../../../data/projects.json';


const Projects = () => {

    interface ProjectData {
        'id'        : number;
        'title'     : string;
        'main_link' : string;
        'type'      : string;
        'img'       : string;
        'img_desc'  : string;
        'proj_desc' : string;
        'tech'      : Array<string>;
    }

    const renderProjects = () => {
        var projects = [];
        var counter = 0;

        for (let i= 0; i < data.length; i++){
            let project = (data as ProjectData[])[i];
            if (project.type === "featured") {
                projects.push(
                    <Project 
                        title={project.title}
                        main_link={project.main_link}
                        img={project.img}
                        img_desc={project.img_desc}
                        tech={project.tech}
                        odd={ counter %2 === 0 ? true : false }
                        key={project.id}
                    >
                        <p className='paragraph'> {project.proj_desc} </p> 
                    </Project>
                );

                counter++;
            }
        }

        return projects;
    }

    return (
        <div className='page-spacer' id='projects'>
            <TextContainer>
                <div className='title'> The Goods</div>

                { renderProjects() }

            </TextContainer>
        </div>
    );
};

export default memo(Projects);
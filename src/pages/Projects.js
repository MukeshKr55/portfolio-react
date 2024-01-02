import { ProjectItem } from "../Components/ProjectItem"
import "../styles/Projects.css"
import { ProjectList } from "../helpers/ProjectList"


export const Projects = () => {
    return <div className="projects">
        <h1>My Personal Projects</h1>
        <div className="projectList">
            {ProjectList.map((item, idx)=>{
                return <ProjectItem name={item.name} image={item.image} idx={idx} />
            })}
        </div>
    </div>
}
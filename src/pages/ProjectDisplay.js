import { useParams } from "react-router-dom"
import { ProjectList } from "../helpers/ProjectList";
import { GitHub } from "@mui/icons-material";
import "../styles/ProjectDisplay.css";

export const ProjectDisplay = () => {
    const {id} = useParams();
    const project = ProjectList[id];
    return <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} />
        <p><b>Skills: </b>{project.skills}</p>
        <GitHub />
    </div>
}
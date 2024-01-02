import { useNavigate } from "react-router-dom";

export const ProjectItem = ({ image, name, idx }) => {
    const navigate = useNavigate();
    return (
        <div className="projectItem" onClick={() => {navigate(`/projects/${idx}`)}}>
            <div style={{backgroundImage:`url(${image})`}} className="bgImage" />
            <h1>{name}</h1>
        </div>
    );
}
import { Link, useLocation } from "react-router-dom"
import "../styles/Navbar.css"
import { Reorder } from "@mui/icons-material"
import { useEffect, useState } from "react"


export const Navbar = () => {

    const [expandNav, setExpandNav] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNav(false);
    },[location]);

    return <div className="navbar" id={expandNav ? "open":"close"}>
        <div className="toggleButton">
            <button onClick={() => {setExpandNav((prev) => !prev)}}><Reorder /></button>
        </div>
        <div className="links">
            <Link to="/portfolio-react">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
}
import { Email, GitHub, LinkedIn } from "@mui/icons-material"
import { Link } from "react-router-dom";
import "../styles/Home.css"

export const Home = () => {
    return (<div className="home">
        <div className="about">
            <h2>Hi, My Name is Mukesh</h2>
            <div className="prompt">
                <p>A software developer with a passion for learning and creating.</p>
                <Link to="https://in.linkedin.com/"><LinkedIn /></Link>
                <Link to="https://mail.google.com/mail/"><Email /></Link>
                <Link to="https://github.com/"><GitHub /></Link>
            </div>
            </div>

            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>ReactJS, Redux, HTML, CSS, BootStrap, NPM, TailwindCSS</span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>NodeJS, GraphQL, Java Spring, MySQL</span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>Javascript, Python, Java, Typescript, C++</span>
                    </li>
                </ol>
            </div>
    </div>);
}
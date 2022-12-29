import {DiCss3, DiHtml5, DiJava, DiJqueryLogo, DiReact} from "react-icons/di";
import {IoLogoJavascript} from "react-icons/io";
import {SiDocker, SiMysql, SiSpring} from "react-icons/si";
import "../styles/technologies.css";

export const TechStack = () => {
    return (
        <div className="technologies-wrapper">
            <div className="front--end">
                <h1 className="title">Front End</h1>
                <div className="technologies">
                    <DiHtml5/>
                    <p>HTML</p>
                </div >
                <div className="technologies">
                    <DiCss3/>
                    <p>CSS3</p>
                </div>
                <div className="technologies">
                    <DiJqueryLogo/>
                    <p>JQuery</p>
                </div>
                <div className="technologies">
                    <IoLogoJavascript/>
                    <p>JavaScript</p>
                </div>
                <div className="technologies">
                    <DiReact/>
                    <p>ReactJS</p>
                </div>

            </div>
            <div className="back--end">
                <h1 className="title">backend</h1>
                <div className="technologies">
                    <DiJava/>
                    <p>Java</p>
                </div>
                <div className="technologies">
                    <SiSpring/>
                    <p>Spring Boot</p>
                </div>
                <div className="technologies">
                    <SiMysql/>
                    <p>MySQL</p>
                </div>
                <div className="technologies">
                    <SiDocker/>
                    <p>Docker</p>
                </div>
            </div>
        </div>
    )
}
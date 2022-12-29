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
                    <DiHtml5 className="technology"/>
                    <p>HTML</p>
                </div >
                <div className="technologies">
                    <DiCss3 className="technology"/>
                    <p>CSS3</p>
                </div>
                <div className="technologies">
                    <DiJqueryLogo className="technology"/>
                    <p>JQuery</p>
                </div>
                <div className="technologies">
                    <IoLogoJavascript className="technology"/>
                    <p>JavaScript</p>
                </div>
                <div className="technologies">
                    <DiReact className="technology"/>
                    <p>ReactJS</p>
                </div>

            </div>
            <div className="back--end">
                <h1 className="title">backend</h1>
                <div className="technologies">
                    <DiJava className="technology"/>
                    <p>Java</p>
                </div>
                <div className="technologies">
                    <SiSpring className="technology"/>
                    <p>Spring Boot</p>
                </div>
                <div className="technologies">
                    <SiMysql className="technology"/>
                    <p>MySQL</p>
                </div>
                <div className="technologies">
                    <SiDocker className="technology"/>
                    <p>Docker</p>
                </div>
            </div>
        </div>
    )
}
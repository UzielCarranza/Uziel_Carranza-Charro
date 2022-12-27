import "../styles/linkElements.css";
import resume from "../otherFiles/Uziel_Carranza-Charro_Resume.pdf";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {MdPictureAsPdf} from "react-icons/md";

export const LinkElements = () => {
    // <a href="https://github.com/UzielCarranza" target="_blank"/>
    return (
        <>
            <div className="link-element--wrapper responsive-row">
                <a className="link-element" href="https://www.linkedin.com/in/uziel-carranza-charro/"
                   target="_blank">
                    <BsLinkedin style={{color: "#0e76a8", backgroundColor: "#fff"}} className="link-element" title="LinkedIn"/>

                </a>

                <a className="link-element" href="https://github.com/UzielCarranza" target="_blank">
                    <BsGithub style={{backgroundColor: "#f5f5f5"}} className="link-element" title="Github"/>
                </a>

                <a className="link-element" href={resume}>
                    <MdPictureAsPdf style={{color: "#bd2c00", backgroundColor: "#fff"}} className="link-element" title="Resume"/>
                </a>
            </div>
        </>
    )
}
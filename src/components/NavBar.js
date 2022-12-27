/*Code gather from https://blog.logrocket.com/create-responsive-navbar-react-css/*/
import "../styles/navbar.css";
import {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {BsPersonFill} from "react-icons/bs";
import {GrPersonalComputer, GrSend, GrTask} from "react-icons/gr";

//TODO: Add links to all redirecting elements

export const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navigation">
            <a href="https://www.linkedin.com/in/uziel-carranza-charro/" className="brand-name">
                Uziel Carranza Charro
            </a>
            {isNavExpanded ? <AiOutlineClose style={{color: "#fff", backgroundColor: "red"}} className="hamburger"
                                             onClick={() => setIsNavExpanded(!isNavExpanded)}/>
                : <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
                    {/* icon from heroicons.com */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            }
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="/about">About Me</a>
                        <BsPersonFill/>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                        <GrTask/>
                    </li>
                    <li>
                        <a href="/tech-stack">Tech stack</a>
                        <GrPersonalComputer/>
                    </li>
                    <li>
                        <a href="/contact">Contact Me</a>
                        <GrSend/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
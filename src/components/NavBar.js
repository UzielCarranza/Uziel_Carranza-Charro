/*Code gather from https://blog.logrocket.com/create-responsive-navbar-react-css/*/
import "../styles/navbar.css";
import {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {BsPersonFill} from "react-icons/bs";
import {GrCloudComputer, GrDatabase, GrPersonalComputer, GrTask} from "react-icons/gr";
import {RiArrowGoBackFill} from "react-icons/ri";

//TODO: Add links to all redirecting elements

export const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false);

    const closeMenu = () => {
        setIsNavExpanded(false);
        setIsSubMenuExpanded(false);
    }

    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                Uziel Carranza Charro
            </a>
            {isNavExpanded ? <AiOutlineClose style={{color: "#fff", backgroundColor: "red"}} className="hamburger"
                                             onClick={closeMenu}/>
                : <button className="hamburger" onClick={() => setIsNavExpanded(true)}>
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

            {isSubMenuExpanded ?
                <div
                    className={
                        isSubMenuExpanded ? "navigation-menu expanded" : "navigation-menu"
                    }
                >
                    <ul id="submenu">
                        <RiArrowGoBackFill style={{color: "#283b8b"}} className="close-submenu"
                                           onClick={() => setIsSubMenuExpanded(false)}/>
                        <li>
                            <a href="/front-end">Front End</a>
                            <GrPersonalComputer/>
                        </li>
                        <li>
                            <a href="/back-end">Back End</a>
                            <GrDatabase/>
                        </li>
                        <li>
                            <a href="/full-stack">Full Stack</a>
                            <GrCloudComputer/>
                        </li>
                    </ul>
                </div>
                :
                <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                    <ul>
                        <li>
                            <a href="/">About</a>
                            <BsPersonFill/>
                        </li>
                        <li onClick={() => setIsSubMenuExpanded(!isSubMenuExpanded)}>
                            <a href="/" onClick={(e) => e.preventDefault()}>Projects</a>
                            <GrTask/>
                        </li>
                        <li>
                            <a href="/tech-stack">Tech stack</a>
                            <GrPersonalComputer/>
                        </li>
                    </ul>
                </div>}


        </nav>
    );
}
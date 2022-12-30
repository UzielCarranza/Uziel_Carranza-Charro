import {DiCss3, DiHtml5, DiJava, DiJqueryLogo, DiReact} from "react-icons/di";
import {IoLogoJavascript} from "react-icons/io";
import {SiDocker, SiMysql, SiSpring} from "react-icons/si";
import "../styles/technologies.css";
import {BsFillBootstrapFill} from "react-icons/bs";
import {motion} from "framer-motion"

export const TechStack = () => {
    return (
        <div className="technologies-wrapper">
            <h1 className="page-title">My Tech Stack</h1>
            <div className="front--end">
                <motion.div
                    className="box title"
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [0, 0, 10, 10, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 50
                    }}
                >
                    <h1>Front End</h1>
                </motion.div>

                <motion.div
                    className="box"
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [0, 0, 10, 10, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                >
                    <div className="technologies">
                        <DiHtml5 style={{color: "#e34f26"}} className="technology"/>
                        <p>HTML</p>
                    </div>
                </motion.div>

                <div className="technologies">
                    <DiCss3 style={{color: "#2965f1"}} className="technology"/>
                    <p>CSS3</p>
                </div>
                <div className="technologies">
                    <DiJqueryLogo style={{color: "#0769AD"}} className="technology"/>
                    <p>JQuery</p>
                </div>
                <div className="technologies">
                    <IoLogoJavascript style={{backgroundColor: "#F0DB4F", color: "#323330"}} className="technology"/>
                    <p>JavaScript</p>
                </div>
                <div className="technologies">
                    <motion.div
                        className="box"
                        animate={{
                            scale: [2, 1, 1, 2, 2],
                            borderRadius: ["0%", "0%", "20%", "20%", "0%"]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 0.5
                        }}
                    >
                        <DiReact style={{color: "#61DBFB"}} className="technology"/>

                    </motion.div>
                    <p>ReactJS</p>
                </div>

                <div className="technologies">
                    <BsFillBootstrapFill style={{color: "rgb(86,61,124)"}} className="technology"/>
                    <p>BootStrap</p>
                </div>

            </div>
            <div className="back--end">
                <motion.div
                    className="box title"
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [0, 0, 10, 10, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 50
                    }}
                >
                    <h1>backend</h1>
                </motion.div>
                <div className="technologies">
                    <DiJava style={{backgroundColor: "#007396", color: "#fff"}} className="technology"/>
                    <p>Java</p>
                </div>

                <motion.div
                    className="box"
                    animate={{
                        scale: [1, 1, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "20%", "20%", "0%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 50
                    }}
                >
                    <div className="technologies">
                        <SiSpring style={{color: "#80ea6e"}} className="technology"/>
                        <p>Spring Boot</p>
                    </div>
                </motion.div>
                <div className="technologies">
                    <SiMysql style={{color: "#00758F"}} className="technology"/>
                    <p>MySQL</p>
                </div>
                <div className="technologies">
                    <SiDocker style={{color: "#0db7ed"}} className="technology"/>
                    <p>Docker</p>
                </div>
            </div>
        </div>
    )
}
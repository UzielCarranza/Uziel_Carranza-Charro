import "../styles/technologies.css";
import MediaQuery from "react-responsive";
import {TechStackMobileView} from "./TechStackMobileView";
import {BackEndStack} from "./BackEndStack";
import {FrontEndStack} from "./FrontEndStack";
import {motion} from "framer-motion";

export const TechStack = () => {
    return (
        <div className="technologies-wrapper">
            <h1 className="page-title">My Tech Stack</h1>

            <MediaQuery maxDeviceWidth={1224}>
                <TechStackMobileView/>
            </MediaQuery>

            <MediaQuery minDeviceWidth={1224}>
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
                    <FrontEndStack/>
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
                        <h1>Back End</h1>
                    </motion.div>
                    <BackEndStack/>
                </div>
            </MediaQuery>
        </div>
    )
}
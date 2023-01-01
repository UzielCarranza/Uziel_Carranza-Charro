import {motion} from "framer-motion";
import {DiJava} from "react-icons/di";
import {SiDocker, SiMysql, SiSpring} from "react-icons/si";
export const BackEndStack = () => {
    return (
        <>
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
        </>
    )
}
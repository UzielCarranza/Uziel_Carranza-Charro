import {developmentProjects} from "../server.js";
import CarouselComponent from "./Carousel";

export const FrontEnd = () => {
    const frontEndProjects = developmentProjects.frontEnd;

    return (
        <>
            <CarouselComponent projects={frontEndProjects}/>
        </>)
}
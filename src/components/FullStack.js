import {developmentProjects} from "../server.js";
import CarouselComponent from "./Carousel";

export const FullStack = () => {
    const fullStackProjects = developmentProjects.fullStack;

    return (
        <>
            <CarouselComponent projects={fullStackProjects}/>
        </>)
}
import {developmentProjects} from "../server.js";
import CarouselComponent from "./Carousel";

export const BackEnd = () => {
    const backEndProjects = developmentProjects.backEnd;

    return (
        <>
            <CarouselComponent projects={backEndProjects}/>
        </>)
}
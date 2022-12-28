import {developmentProjects} from "../server.js";
import CarouselComponent from "./Carousel";
import {NavBar} from "./NavBar";

export const FrontEnd = () => {
    const frontEndProjects = developmentProjects.frontEnd;

    return (
        <>
            <NavBar/>
            <CarouselComponent projects={frontEndProjects}/>
        </>)
}
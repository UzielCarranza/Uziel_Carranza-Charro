import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import "../styles/carousel.css";
import {BsGithub} from "react-icons/bs";
// https://www.npmjs.com/package/react-responsive-carousel
export default class CarouselComponent extends Component {
    render() {
        return (
            <Carousel centerSlidePercentage={true}>
                {
                    this.props.projects.map((item, i) => (
                        <div key={this.props.projects[i].id}>

                            <h1 style={{color: "#ffb703"}}>{this.props.projects[i].title}</h1>
                            <img className="project-img"
                                 src={this.props.projects[i].url} alt="s"
                            />
                            <p className="legend">{this.props.projects[i].description}
                                <a href={this.props.projects[i].github_location} target="_blank">
                                    <BsGithub style={{backgroundColor: "black", color: "#fff"}}
                                              className="link-element-carousel" title="Github"/>
                                </a>
                            </p>
                        </div>
                    ))
                }
            </Carousel>
        );
    }
};
// CarouselComponent.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="../img-01.jpg" alt="Project 1" />
                </div>
                <div>
                    <img src="../img-02.jpg" alt="Project 2" />
                </div>
                <div>
                    <img src="../img-03.jpg" alt="Project 3" />
                </div>
            </Carousel>
        </div>
    );
}

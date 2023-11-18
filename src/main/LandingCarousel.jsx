import {useState, useEffect, useRef } from 'react';
import useEffectDelay from '../useEffectDelay.js';
import './LandingCarousel.css';
import '../colors-and-fonts.css';
import CarouselItem from "./CarouselItem.jsx";

/**
 * The main recommendation carousel on the landing page
 * @param {*} props // Accepts the json file
 * @returns 
 */
const LandingCarousel = (props) => {
    const [slide, setSlide] = useState(0); // Handles the slide state
    const slideInterval = 10000;

    /**
     * Moves to the next slide
     */
    const nextSlide = () => {
        setSlide(slide === props.data.length - 1 ? 0 : slide + 1);
    }

    /**
     * Moves to the previous slide
     */
    const prevSlide = () => {
        setSlide(slide === 0 ? props.data.length - 1 : slide - 1);
    }

    useEffectDelay(nextSlide, slideInterval);
    
    return (
        <div className="LandingCarousel">
            {props.data.map((item, idx) => 
                <div key={idx} className={slide===idx ? "item-visible" : "item-hidden"}>
                    <CarouselItem info={item} />
                </div>
            )}
            <div className="carousel-buttons">
                <ul>
                    {props.data.map((item, idx)=>
                    <li key={idx}> 
                        <button
                            className= {slide===idx ? "carousel-selector selected" : "carousel-selector non-selected"}
                            type="button" onClick={() => setSlide(idx)}/> 
                    </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default LandingCarousel;
import {useState, useEffect, useRef } from 'react';
import useEffectDelay from '../useEffectDelay.js';
import './LandingCarousel.css';
import '../colors-and-fonts.css';
import CarouselItem from "./CarouselItem.jsx";
import SlideButtonImage from "../images/carouselbutton.jpg";

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

    /**
     * Handles all slide button input
     * @param {*} e Event
     * @param {*} isNext 
     */
    const handleSlideButton = (event, isNext) => {
        event.preventDefault();
        if (isNext) {
            nextSlide();
        } else {
            prevSlide();
        }
    }

    useEffectDelay(nextSlide, slideInterval);
    
    return (
        <div className="LandingCarousel">
            {props.data.map((item, idx) => 
                <div key={idx} className={slide===idx ? "item-visible" : "item-hidden"}>
                    <CarouselItem info={item} />
                </div>
            )}
            <form className="slide-btns">
                <input className="slide-btn left" type="image" src={SlideButtonImage} onClick={event => handleSlideButton(event, false)}/>
                <input className="slide-btn right" type="image" src={SlideButtonImage} onClick={event => handleSlideButton(event, true)}/>
            </form>
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
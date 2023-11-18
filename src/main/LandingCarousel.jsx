import {useState, useEffect} from 'react';
import './LandingCarousel.css';
import '../colors-and-fonts.css';
import CarouselItem from "./CarouselItem.jsx";

const LandingCarousel = (props) => {
    const [slide, setSlide] = useState(0);
    const [slideCount, setSlideCount] = useState(0);  // Handles the autoscroll

    const slideInterval = 5000;

    const nextSlide = () => {
        setSlide(slide === props.data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? props.data.length - 1 : slide - 1);
    }

    useEffect(() => {
        const timer = setTimeout(() => setSlideCount(slideCount + 1), slideInterval);
        nextSlide();
    }, [slideCount]);
    
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
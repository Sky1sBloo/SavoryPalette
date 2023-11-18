import {useState} from 'react';
import './LandingCarousel.css';
import '../colors-and-fonts.css';
import CarouselItem from "./CarouselItem.jsx";

const LandingCarousel = (props) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === props.data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? props.data.length - 1 : slide - 1);
    }

    //let currentItem = new Array(React.Children.count).map(()=><li> <button className="carousel-selector" type="button" /> </li>);
    
    return (
        <div className="LandingCarousel">
            {props.data.map((item, length) => 
                <CarouselItem info={item} />
            )}
            <div className="carousel-buttons">
                <ul>
                    
                </ul>
            </div>
        </div>
    );
}

export default LandingCarousel;
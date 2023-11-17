import './CarouselItem.css'
import '../colors-and-fonts.css';
import TestImage from '../images/omelette.webp';
import ClockImage from '../images/clock.png';

const CarouselItem = () => {
    return (
        <div className="CarouselItem">
            <img className="carousel-image" src={TestImage} />
            <div className="carousel-info">
                <h1>Title</h1>
                <ul className="carousel-tag">
                    <li>Breakfast</li>
                    <li>Fast</li>
                </ul>
                <p>Description</p>
                <div className="carousel-time-difficulty">
                </div>
            </div>
        </div>
    );
}

export default CarouselItem;
import './CarouselItem.css'
import '../colors-and-fonts.css';
import TestImage from '../images/omelette.webp';
import ClockImage from '../images/clock.png';



/**
 * 
 * @param {*} props
 * @param {ItemInfo} props.info
 * @returns 
 */
const CarouselItem = (props) => {
    const tagItems = props.info.tags.map((tagName) => <li>{tagName}</li>);

    return (
        <div className="CarouselItem">
            <img className="carousel-image" src={TestImage} alt=""/>
            <div className="carousel-info">
                <div>
                    <h1>{props.info.title}</h1>
                    <ul className="carousel-tag">
                        {tagItems}
                    </ul>
                    <p>{props.info.description}</p>
                </div>
                <div className="carousel-time-difficulty">
                    <div className="carousel-time">
                        <img src={ClockImage} alt=""/>
                        <p>{props.info.time}</p>
                    </div>
                    <div className="carousel-difficulty">
                        <p>{props.info.difficulty}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselItem;
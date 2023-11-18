import './CarouselItem.css'
import '../colors-and-fonts.css';
import ClockImage from '../images/clock.png';

/**
 * A Carousel display representing the recipes
 * @param {*} props
 * @param {ItemInfo} props.info
 * @returns 
 */
const CarouselItem = (props) => {
    const tagItems = props.info.tags.map((tagName, idx) => <li key={idx}>{tagName}</li>);
    console.log(props.info.cardColor);
    
    return (
        <div className="CarouselItem" style={{backgroundColor: props.info.cardColor}}>
            <img className="carousel-image" src={props.info.image} alt=""/>
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
                        <img src={ClockImage} alt="" />
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
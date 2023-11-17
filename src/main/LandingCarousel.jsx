import './LandingCarousel.css';
import '../colors-and-fonts.css'
import CarouselItem from "./CarouselItem";
import RecipeInfo from './RecipeInfo.jsx';

const LandingCarousel = (props) => {
    let testItem = new RecipeInfo('Omelette', 'I like omelette', ['Breakfast', 'Fast'], '10m', 'Easy');

    return (
        <div className="LandingCarousel">
            <CarouselItem info={testItem} />
            <div className="carousel-buttons">
                <form>
                    <input className="carousel-selector" type="button" />
                    <input className="carousel-selector" type="button" />
                </form>
            </div>
        </div>
    );
}

export default LandingCarousel;
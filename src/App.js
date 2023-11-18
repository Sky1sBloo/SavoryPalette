import './App.css';
import Header from './Header.jsx';
import LandingCarousel from './main/LandingCarousel.jsx';
import CarouselItem from './main/CarouselItem.jsx';
import Recipes from './data/recipes.json';

const App = () => {
  return (
    <div className="App">
      <Header />
      <hr />
      <main>
        <LandingCarousel data = {Recipes.CarouselItems}/>
      </main>
    </div>
  );
}

export default App;
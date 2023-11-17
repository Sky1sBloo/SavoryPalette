import './App.css';
import Header from './Header.jsx';
import CarouselItem from './main/CarouselItem.jsx';
import RecipeInfo from './main/RecipeInfo.jsx';

function App() {
  let testItem = new RecipeInfo('Omelette', 'I like omelette', ['Breakfast', 'Fast'], '10m', 'Easy');
  return (
    <div className="App">
      <Header />
      <hr />
      <main>
        <CarouselItem info={testItem}/>
      </main>
    </div>
  );
}

export default App;
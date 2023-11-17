import './App.css';
import Header from './Header.jsx';
import LandingCarousel from './main/LandingCarousel.jsx';


const App = () => {
  
  return (
    <div className="App">
      <Header />
      <hr />
      <main>
        <LandingCarousel />
      </main>
    </div>
  );
}

export default App;
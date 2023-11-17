import './Header.css';
import './colors-and-fonts.css';

import Icon from './images/header/SavoryPalette.png';
import SearchButton from './images/header/search.png';
import FacebookButton from './images/header/facebook.png';
import TwitterButton from './images/header/twitter.png';

const Header = () => {
    return (
        <header className="Header">
            <img id="logo" src={Icon} alt="icon"/>
            <ul id="navigation-bar">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
            </ul>
            <div id="contact-navigation">
                <form id="search-form">
                    <input type="text" />
                    <input type="image" src={SearchButton} alt="search"/>
                </form>
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={FacebookButton} /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={TwitterButton} /></a>
            </div>
        </header>
    );
}

export default Header;
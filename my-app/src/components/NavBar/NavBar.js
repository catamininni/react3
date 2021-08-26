import './NavBar.css';
import Widget from '../Widget/Widget.js';
import Main from '../Main/Main.js'
import{
    Link,
} from "react-router-dom";


function NavBar() {
    return(
        <nav className="topnav">
                <Widget/>
                <Link to='/'>Inicio</Link>
                <Link to="/product/:id">Productos</Link>
                <Link to=""></Link>
        </nav>
    );
}

export default NavBar;

import logo from './logo.png'
import './navbar.css'

const NavBar = () => {
    return (
        <div className="Container">
            <img src= {logo} alt="image"/>
            <p>Website</p>
        </div>
    )
}

export default NavBar;
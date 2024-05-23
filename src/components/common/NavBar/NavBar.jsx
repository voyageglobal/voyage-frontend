import logo from "../../../assets/img/logo.png";
import "./navBar.scss";
const NavBar = () => {
    return (
            <nav>
                <ul>
                    <li className="menu-item">Destinations</li>
                    <li className="menu-item">About us</li>
                    <li className="menu-item">Contacts</li>
                    <li className="menu-item">Travel Tips</li>
                    <li className="menu-item center-item">
                        <div className="logo-container">
                            <div className="logo-img">
                                <img src={logo} alt="The logotype of Voyage" />
                            </div>
                            <div className="logo-text">VOYAGE</div>
                        </div>
                    </li>
                    <li className="menu-item right-item">Sign In</li>
                </ul>
            </nav>
    );
};

export default NavBar;
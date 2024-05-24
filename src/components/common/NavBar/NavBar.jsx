import LogoButton from '../LogoButton/LogoButton';
import './navBar.scss';
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className="menu-item">Destinations</li>
        <li className="menu-item">About us</li>
        <li className="menu-item">Contacts</li>
        <li className="menu-item">Travel Tips</li>
        <li className="menu-item center-item">
          <LogoButton />
        </li>
        <li className="menu-item right-item">Sign In</li>
      </ul>
    </nav>
  );
};
export default NavBar;

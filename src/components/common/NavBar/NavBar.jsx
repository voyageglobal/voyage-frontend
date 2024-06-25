import { Link } from 'react-router-dom';
import LogoButton from '../LogoButton/LogoButton';
const NavBar = () => {
  return (
    <div className="flex min-h-[4.75rem] items-center justify-center bg-light-color bg-opacity-90">
      <nav className="container mx-auto text-center font-primary text-lg text-dark-color">
        <ul className="flex items-center justify-between">
          <li className="mr-7 list-none">
            <Link to="/cities-guides">Destinations</Link>
          </li>
          <li className="mr-7 list-none">
            <Link to="/about-us">About us</Link>
          </li>
          <li className="mr-7 list-none">
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="mr-36 w-24 list-none">
            <Link to="/travel-tips">Travel Tips</Link>
          </li>
          <li className="list-none">
            <LogoButton />
          </li>
          <li className="ml-auto list-none">
            <Link to="/sign-in">Sign In</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;

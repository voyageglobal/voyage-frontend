import { Link } from 'react-router-dom';
import LogoButton from '../LogoButton/LogoButton';
import { ROUTES } from '../../../App';
const NavBar = () => {
  return (
    <div className="fixed z-10 flex min-h-[4.75rem] w-full items-center justify-center bg-light-color bg-opacity-90">
      <nav className="container mx-auto text-center font-primary text-lg text-dark-color">
        <ul className="flex items-center justify-between">
          <li className="mr-7 list-none">
            <Link to={ROUTES.cities}>Destinations</Link>
          </li>
          <li className="mr-7 list-none">
            <Link to={ROUTES.aboutUs}>About us</Link>
          </li>
          <li className="mr-7 list-none">
            <Link to={ROUTES.contacts}>Contacts</Link>
          </li>
          <li className="mr-36 w-24 list-none">
            <Link to={ROUTES.travelTips}>Travel Tips</Link>
          </li>
          <li className="list-none">
            <LogoButton />
          </li>
          <li className="ml-auto list-none">
            <Link to={ROUTES.signIn}>Sign In</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;

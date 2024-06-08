import LogoButton from '../LogoButton/LogoButton';
const NavBar = () => {
  return (
    <div className="bg-light-color bg-opacity-90 min-h-[4.75rem] flex justify-center items-center">
      <nav className="max-w-[73.13rem] w-full font-primary text-lg text-dark-color text-center">
        <ul className="w-full flex items-center justify-between">
          <li className="mr-7 list-none">Destinations</li>
          <li className="mr-7 list-none">About us</li>
          <li className="mr-7 list-none">Contacts</li>
          <li className="mr-36 w-24 list-none">Travel Tips</li>
          <li className="list-none">
            <LogoButton />
          </li>
          <li className="ml-auto list-none">Sign In</li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;

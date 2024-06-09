import LogoButton from '../LogoButton/LogoButton';
const NavBar = () => {
  return (
    <div className="flex min-h-[4.75rem] items-center justify-center bg-light-color bg-opacity-90">
      <nav className="container mx-auto text-center font-primary text-lg text-dark-color">
        <ul className="flex items-center justify-between">
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

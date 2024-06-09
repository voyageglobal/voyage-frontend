import logo from '../../../assets/img/logo.png';

const LogoButton = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <img src={logo} alt="The logotype of Voyage" className="block" />
        <div className="mx-2 h-11 w-px bg-dark-color"></div>
      </div>
      <div className="font-secondary text-xl">VOYAGE</div>
    </div>
  );
};

export default LogoButton;

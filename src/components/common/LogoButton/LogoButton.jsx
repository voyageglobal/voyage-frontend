import logo from '../../../assets/img/logo.png';

const LogoButton = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <img src={logo} alt="The logotype of Voyage" className="block" />
        <div className="w-[1px] h-[2.7rem] bg-dark-color mx-2"></div>
      </div>
      <div className="font-secondary text-[1.31rem]">VOYAGE</div>
    </div>
  );
};

export default LogoButton;

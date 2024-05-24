import logo from '../../../assets/img/logo.png';
import './logoButton.scss';

const LogoButton = () => {
  return (
    <div className="logo-container">
      <div className="logo-img">
        <img src={logo} alt="The logotype of Voyage" />
      </div>
      <div className="logo-text">VOYAGE</div>
    </div>
  );
};

export default LogoButton;

import './cityCard.scss';
import Paris from '../../../assets/img/Paris.png';

const CityCard = () => {
  return (
    <div className="card-wrapper">
      <img className="card-img" src={Paris} alt="The picture of Paris" />
      <p className="card-city">Paris</p>
      <p className="card-country">France</p>
    </div>
  );
};

export default CityCard;

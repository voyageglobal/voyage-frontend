import './cityCard.scss';

const CityCard = ({ cityName, countryName, image }) => {
  return (
    <div className="card-wrapper">
      <img
        className="card-img"
        src={image}
        alt={`The picture of ${cityName}`}
      />
      <p className="card-city">{cityName}</p>
      <p className="card-country">{countryName}</p>
    </div>
  );
};

export default CityCard;

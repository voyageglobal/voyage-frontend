import { memo } from 'react';
const CityCard = ({ cityName, countryName, image }) => {
  return (
    <div className="flex h-80 w-44 flex-col rounded-10px bg-white/30 font-primary shadow-md">
      <img src={image} alt={`The picture of ${cityName}`} />
      <p className="ml-1.5 mt-2.5 text-xl uppercase">{cityName}</p>
      <p className="ml-1.5 mt-2.5 text-base">{countryName}</p>
    </div>
  );
};

export default memo(CityCard);

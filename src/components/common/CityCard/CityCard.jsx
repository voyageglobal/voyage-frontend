import { memo } from 'react';
import { Link } from 'react-router-dom';

const CityCard = ({ cityName, countryName, image }) => {
  return (
    <Link className="flex h-full" to="/cities/id">
      <div className="flex min-h-80 w-44 flex-1 flex-col rounded-10px bg-white/30 font-primary shadow-md">
        <img
          className="h-64 w-full rounded-10px"
          src={image}
          alt={`The picture of ${cityName}`}
        />
        <p className="mx-1.5 mt-2.5 break-words text-xl uppercase">
          {cityName}
        </p>
        <p className="mx-1.5 mt-2.5 break-words text-base">{countryName}</p>
      </div>
    </Link>
  );
};

export default memo(CityCard);

import { memo } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { ROUTES } from '../../../App';

const CityCard = ({ cityId, cityName, countryName, image }) => {
  return (
    <Link
      className="flex h-full"
      to={generatePath(ROUTES.city, { id: cityId })}
    >
      <div className="flex min-h-80 w-44 flex-1 flex-col rounded-10px bg-white/30 font-primary shadow-md">
        <img
          className="h-64 w-full rounded-10px object-cover"
          src={image}
          alt={`The picture of ${cityName}`}
        />
        <p
          title={cityName}
          className="mx-1.5 mt-2.5 line-clamp-2 break-words text-xl uppercase"
        >
          {cityName}
        </p>
        <p className="mx-1.5 mt-2.5 break-words text-base">{countryName}</p>
      </div>
    </Link>
  );
};

export default memo(CityCard);

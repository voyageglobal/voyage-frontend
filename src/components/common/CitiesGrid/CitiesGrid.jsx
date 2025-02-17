import { Link, generatePath } from 'react-router-dom';
import { ROUTES } from '../../../App';
import SkeletonString from '../../common/Skeletons/SkeletonString';

const CitiesGrid = ({ cities = [], isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-7 gap-x-12 font-fourth font-light">
        {Array.from({ length: 7 }).map((_, index) => (
          <SkeletonString key={index} width={120} height={20} lines={7} />
        ))}
      </div>
    );
  }

  if (!cities.length) return null;

  return (
    <div className="grid grid-cols-7 gap-x-12 font-fourth font-light">
      {cities.map(({ id, name }) => (
        <Link
          key={id}
          className="line-clamp-1 text-lg transition hover:text-orange-color"
          to={generatePath(ROUTES.city, { id })}
          title={name}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default CitiesGrid;

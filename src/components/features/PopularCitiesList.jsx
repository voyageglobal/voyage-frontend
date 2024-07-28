import { memo } from 'react';
import usePopularCities from '../../hooks/usePopularCities';
import CitiesList from '../common/CitiesList/CitiesList';

const PopularCitiesList = ({ limit }) => {
  const { data, error, isLoading } = usePopularCities();

  return (
    <CitiesList limit={limit} data={data} error={error} isLoading={isLoading} />
  );
};

export default memo(PopularCitiesList);

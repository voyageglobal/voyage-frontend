import { memo } from 'react';
import usePopularCities from '../../hooks/usePopularCities';
import CitiesList from '../common/CitiesList/CitiesList';

const PopularCitiesList = () => {
  const { data, error, isLoading } = usePopularCities(10);

  return <CitiesList data={data} error={error} isLoading={isLoading} />;
};

export default memo(PopularCitiesList);

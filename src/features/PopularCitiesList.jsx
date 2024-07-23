import { memo } from 'react';
import usePopularCities from '../hooks/usePopularCities';
import CitiesList from '../components/common/CitiesList/CitiesList';

const PopularCitiesList = ({ limit, increaseLimit }) => {
  const { data, error, isLoading } = usePopularCities();

  return (
    <CitiesList
      limit={limit}
      increaseLimit={increaseLimit}
      showLoadMoreButton={false}
      data={data}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default memo(PopularCitiesList);

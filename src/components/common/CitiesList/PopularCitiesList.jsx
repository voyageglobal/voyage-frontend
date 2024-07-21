import { memo } from 'react';
import usePopularCities from '../../../hooks/usePopularCities';
import CitiesList from './CitiesList';

const PopularCitiesList = ({ limit, increaseLimit }) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePopularCities();

  return (
    <CitiesList
      limit={limit}
      increaseLimit={increaseLimit}
      showLoadMoreButton={false}
      data={data}
      error={error}
      isLoading={isLoading}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default memo(PopularCitiesList);

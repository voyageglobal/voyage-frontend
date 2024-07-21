import { memo } from 'react';
import useAllCities from '../../../hooks/useAllCities';
import CitiesList from './CitiesList';
import { FETCH_SETTINGS } from '../../../services/CitiesServise';

const AllCitiesList = ({ limit, increaseLimit }) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    total,
  } = useAllCities({
    pageSize: 50,
    sortOrder: FETCH_SETTINGS.SORT.NAME_ASC,
  });

  return (
    <CitiesList
      limit={limit}
      increaseLimit={increaseLimit}
      showLoadMoreButton={true}
      data={data}
      error={error}
      isLoading={isLoading}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      total={total}
    />
  );
};

export default memo(AllCitiesList);

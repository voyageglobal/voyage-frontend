import useAllCities from '../../../hooks/useAllCities';
import CitiesList from './CitiesList';

const AllCitiesList = ({ limit, increaseLimit }) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useAllCities();

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
    />
  );
};

export default AllCitiesList;

import { memo, useState } from 'react';
import useAllCities from '../hooks/useAllCities';
import CitiesList from '../components/common/CitiesList/CitiesList';
import { FETCH_SETTINGS } from '../services/CitiesService';

const AllCitiesList = ({ initialLimit = 10 }) => {
  const [limit, setLimit] = useState(initialLimit);

  const increaseLimit = () => {
    setLimit(prevLimit => {
      if (prevLimit >= data.length && hasNextPage) {
        fetchNextPage();
      }
      return prevLimit + 10;
    });
  };

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useAllCities({
    pageSize: 50,
    sortOrder: FETCH_SETTINGS.SORT.NAME_ASC,
  });

  return (
    <div>
      <CitiesList
        limit={limit}
        increaseLimit={increaseLimit}
        showLoadMoreButton={true}
        data={data}
        error={error}
        isLoading={isLoading}
      />
      {hasNextPage && (
        <button
          className="mx-auto mt-14 block h-10 w-56 cursor-pointer rounded-10px border-none bg-[rgba(23,23,23,0.82)] text-center font-fourth text-base uppercase text-light-color"
          onClick={increaseLimit}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading more...' : 'Load more cities'}
        </button>
      )}
    </div>
  );
};

export default memo(AllCitiesList);

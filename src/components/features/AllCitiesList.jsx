import { memo } from 'react';
import useAllCities from '../../hooks/useAllCities';
import CitiesList from '../common/CitiesList/CitiesList';
import { FETCH_SETTINGS } from '../../services/CitiesService';

const AllCitiesList = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useAllCities({
    pageSize: 10,
    sortOrder: FETCH_SETTINGS.SORT.NAME_ASC,
  });

  return (
    <div>
      <CitiesList data={data} error={error} isLoading={isLoading} />
      {hasNextPage && (
        <button
          className="mx-auto mt-14 block h-10 w-56 cursor-pointer rounded-10px border-none bg-[rgba(23,23,23,0.82)] text-center font-fourth text-base uppercase text-light-color"
          onClick={fetchNextPage}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading more...' : 'Load more cities'}
        </button>
      )}
    </div>
  );
};

export default memo(AllCitiesList);

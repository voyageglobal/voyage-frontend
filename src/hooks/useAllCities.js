import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import fetchCities from '../services/CitiesServise';
import transformCityItem from '../data/transformCityItem';

const ALL_CITIES_QUERY_KEY = 'allCities';

const useAllCities = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ...result
  } = useInfiniteQuery({
    queryKey: [ALL_CITIES_QUERY_KEY],
    queryFn: ({ pageParam = 1 }) =>
      fetchCities({
        page: pageParam,
        pageSize: 50,
        sortOrder: 'NAME_ASC',
        onlyWithGuides: false,
      }),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

  const transformedData = useMemo(
    () => data?.pages.flat().map(transformCityItem) ?? [],
    [data],
  );

  return {
    data: transformedData,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ...result,
  };
};

export default useAllCities;

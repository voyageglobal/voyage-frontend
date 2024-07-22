import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import fetchCities from '../services/CitiesServise';
import transformCityItem from '../data/transformCityItem';

const ALL_CITIES_QUERY_KEY = 'allCities';

const useAllCities = ({ pageSize, sortOrder }) => {
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
        pageSize: pageSize,
        sortOrder: sortOrder,
      }),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
  });

  const transformedData = useMemo(() => {
    return (
      data?.pages?.flatMap(page => page.items.map(transformCityItem)) ?? []
    );
  }, [data]);
  const total = useMemo(() => data?.pages[0]?.total ?? 0, [data]);

  return {
    data: transformedData,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    total,
    ...result,
  };
};

export default useAllCities;

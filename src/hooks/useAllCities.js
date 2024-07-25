import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import fetchCities from '../services/CitiesService';
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
  } = useInfiniteQuery({
    queryKey: [ALL_CITIES_QUERY_KEY],
    queryFn: ({ pageParam = 1 }) =>
      fetchCities({
        page: pageParam,
        pageSize: pageSize,
        sortOrder: sortOrder,
      }),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 2,

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
  });

  const { transformedData, total } = useMemo(() => {
    const pages = data?.pages ?? [];
    const items = pages.flatMap(page => page.items.map(transformCityItem));
    const total = pages[0]?.total ?? 0;

    return { transformedData: items, total };
  }, [data]);

  return {
    data: transformedData,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    total,
  };
};

export default useAllCities;

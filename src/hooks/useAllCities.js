import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import fetchSearchCities from '../services/CitiesSearchService';
import transformCityItem from '../data/transformCityItem';

const ALL_CITIES_QUERY_KEY = 'allCities';

const useAllCities = ({ pageSize, sortOrder, searchQuery }) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [ALL_CITIES_QUERY_KEY, searchQuery],
    queryFn: ({ pageParam = 1 }) =>
      fetchSearchCities({
        page: pageParam,
        pageSize,
        sortOrder,
        searchString: searchQuery,
      }),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasMore ? allPages.length + 1 : undefined,
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

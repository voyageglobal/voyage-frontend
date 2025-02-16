import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import fetchCountries from '../services/CountriesService';
import transformCountryItem from '../data/transformCountryItem';

const ALL_COUNTRIES_QUERY_KEY = 'allCountries';

const useAllCountries = ({ pageSize }) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [ALL_COUNTRIES_QUERY_KEY],
    queryFn: ({ pageParam = 1 }) =>
      fetchCountries({
        page: pageParam,
        pageSize,
      }),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasMore ? allPages.length + 1 : undefined,
  });

  const { transformedData, total } = useMemo(() => {
    const pages = data?.pages ?? [];
    const items = pages.flatMap(page => page.items.map(transformCountryItem));
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

export default useAllCountries;

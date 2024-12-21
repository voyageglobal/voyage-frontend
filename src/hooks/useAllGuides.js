import { useCallback, useEffect, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import fetchGuides from '../services/GuidesService';
import transformGuideItem from '../data/transformGuideItem';

const ALL_GUIDES_QUERY_KEY = 'allGuides';

const useAllGuides = ({
  pageSize,
  sortOrder,
  searchQuery,
  cityId,
  countryId,
  guideCategories,
}) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: [
      ALL_GUIDES_QUERY_KEY,
      searchQuery,
      cityId,
      countryId,
      guideCategories,
    ],
    queryFn: ({ pageParam = 1 }) =>
      fetchGuides({
        page: pageParam,
        pageSize,
        sortOrder,
        searchString: searchQuery,
        city: cityId,
        country: countryId,
        guideCategories,
      }),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
  });

  const { transformedData, total } = useMemo(() => {
    const pages = data?.pages ?? [];
    const items = pages.flatMap(page => page.items.map(transformGuideItem));
    const total = pages[0]?.total ?? 0;

    return { transformedData: items, total };
  }, [data]);

  const handleSearchQueryChange = useCallback(() => {
    refetch();
  }, [refetch]);

  useEffect(handleSearchQueryChange, [
    searchQuery,
    cityId,
    countryId,
    guideCategories,
    refetch,
    handleSearchQueryChange,
  ]);

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

export default useAllGuides;

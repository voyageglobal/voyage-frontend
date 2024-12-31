import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const DESTINATION_SEARCH_QUERY = 'query';

export const useCitySearchQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const citySearchQuery = useMemo(
    () => searchParams.get(DESTINATION_SEARCH_QUERY) || '',
    [searchParams],
  );

  const updateCitySearchQuery = useCallback(
    newCitySearchQuery => {
      const trimmedCitySearchQuery = newCitySearchQuery.trim();

      if (trimmedCitySearchQuery) {
        searchParams.set(DESTINATION_SEARCH_QUERY, trimmedCitySearchQuery);
      } else {
        searchParams.delete(DESTINATION_SEARCH_QUERY);
      }

      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  return { citySearchQuery, updateCitySearchQuery };
};

import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const CITY_SEARCH_QUERY = 'query';

export const useCitySearchQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const citySearchQuery = useMemo(
    () => searchParams.get(CITY_SEARCH_QUERY) || '',
    [searchParams],
  );

  const updateCitySearchQuery = useCallback(
    newCitySearchQuery => {
      const trimmedCitySearchQuery = newCitySearchQuery.trim();

      if (trimmedCitySearchQuery) {
        searchParams.set(CITY_SEARCH_QUERY, trimmedCitySearchQuery);
      } else {
        searchParams.delete(CITY_SEARCH_QUERY);
      }

      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  return { citySearchQuery, updateCitySearchQuery };
};

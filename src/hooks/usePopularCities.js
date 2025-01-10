import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchCities from '../services/CitiesService';
import transformCityItem from '../data/transformCityItem';

const POPULAR_CITIES_QUERY_KEY = 'popularCities';

const usePopularCities = (pageSize = 49) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [POPULAR_CITIES_QUERY_KEY, pageSize],
    queryFn: () => fetchCities({ pageSize }),
    staleTime: 1000 * 60 * 2,
  });

  const transformedData = useMemo(
    () => data?.items?.map(transformCityItem) ?? [],
    [data],
  );

  return {
    data: transformedData,
    error,
    isLoading,
  };
};

export default usePopularCities;

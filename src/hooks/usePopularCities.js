import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchCities from '../services/CitiesServise';
import transformCityItem from '../data/transformCityItem';

const POPULAR_CITIES_QUERY_KEY = 'popularCities';

const usePopularCities = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [POPULAR_CITIES_QUERY_KEY],
    queryFn: fetchCities,
  });

  const transformedData = useMemo(
    () => data?.map(transformCityItem) ?? [],
    [data],
  );

  return {
    data: transformedData,
    error,
    isLoading,
  };
};

export default usePopularCities;

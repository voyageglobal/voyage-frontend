import { useQuery } from '@tanstack/react-query';
import fetchPopularCities from '../services/PopularCitiesServise';
import transformCityItem from '../data/transformCityItem';

const popularCitiesQueryKey = 'popularCities';

const usePopularCities = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: popularCitiesQueryKey,
    queryFn: fetchPopularCities,
  });

  const transformedData = data?.map(transformCityItem);

  return {
    data: transformedData,
    error,
    isLoading,
  };
};

export default usePopularCities;

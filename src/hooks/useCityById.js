import { useQuery } from '@tanstack/react-query';
import fetchCityById from '../services/fetchCityById';
import transformCityItem from '../data/transformCityItem';

const useCityById = id => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['city', id],
    queryFn: () => fetchCityById(id).then(transformCityItem),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

  return {
    city: data,
    error,
    isLoading,
    refetch,
  };
};

export default useCityById;

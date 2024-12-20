import { useQuery } from '@tanstack/react-query';
import fetchGuideById from '../services/fetchGuideById';
import transformGuideItem from '../data/transformGuideItem';

const useGuideById = id => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['guide', id],
    queryFn: () => fetchGuideById(id).then(transformGuideItem),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

  return {
    guide: data,
    error,
    isLoading,
    refetch,
  };
};

export default useGuideById;

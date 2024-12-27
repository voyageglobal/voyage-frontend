import { useQuery } from '@tanstack/react-query';
import { getStatistics } from '../services/StatisticsService';

export function useStatistics() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['statistics'],
    queryFn: () => getStatistics(),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    onError: error => {
      console.error('Error fetching statistics in hook:', error);
    },
  });

  return {
    statistics: data,
    error,
    isLoading,
    refetch,
  };
}

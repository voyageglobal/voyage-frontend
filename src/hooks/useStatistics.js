import { useQuery } from '@tanstack/react-query';
import { fetchStatistics } from '../services/StatisticsService';

export function useStatistics() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['statistics'],
    queryFn: () => fetchStatistics(),
    staleTime: 1 * 60 * 1000,
  });

  return {
    statistics: data,
    error,
    isLoading,
    refetch,
  };
}

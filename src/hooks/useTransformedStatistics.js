import { useStatistics } from './useStatistics';

export function useTransformedStatistics() {
  const { statistics, error, isLoading, refetch } = useStatistics();

  return {
    totalGuides: error ? 'N/A' : (statistics?.totalGuides ?? 'N/A'),
    totalCountries: error ? 'N/A' : (statistics?.totalCountries ?? 'N/A'),
    totalCities: error ? 'N/A' : (statistics?.totalCities ?? 'N/A'),
    totalUsers: error ? 'N/A' : (statistics?.totalUsers ?? 'N/A'),
    isLoading,
    error,
    refetch,
  };
}

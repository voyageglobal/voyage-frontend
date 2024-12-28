import { useStatistics } from './useStatistics';

export function useTransformedStatistics() {
  const { statistics, error, isLoading, refetch } = useStatistics();

  const totalGuides = isLoading
    ? '...'
    : error
      ? 'N/A'
      : (statistics?.totalGuides ?? 0);

  const totalCountries = isLoading
    ? '...'
    : error
      ? 'N/A'
      : (statistics?.totalCountries ?? 0);

  const totalCities = isLoading
    ? '...'
    : error
      ? 'N/A'
      : (statistics?.totalCities ?? 0);

  const totalUsers = isLoading
    ? '...'
    : error
      ? 'N/A'
      : (statistics?.totalUsers ?? 0);

  return {
    totalGuides,
    totalCountries,
    totalCities,
    totalUsers,
    error,
    isLoading,
    refetch,
  };
}

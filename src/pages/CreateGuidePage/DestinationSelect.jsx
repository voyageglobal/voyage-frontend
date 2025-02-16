import { useEffect, useMemo, memo } from 'react';
import Select from 'react-select';
import useAllCountries from '../../hooks/useAllCountries';

const DestinationSelect = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useAllCountries({
    pageSize: 20,
  });

  const citiesList = useMemo(() => data.map(item => item.name), [data]);
  const citiesOptions = useMemo(
    () => citiesList.map(name => ({ value: name, label: name })),
    [citiesList],
  );
  useEffect(() => {
    console.log('data:', citiesList);
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading countries</p>;

  return <Select options={citiesOptions} placeholder="Select a country" />;
};

export default memo(DestinationSelect);

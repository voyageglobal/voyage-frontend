import { useMemo, memo } from 'react';
import Select, { components } from 'react-select';
import useAllCities from '../../hooks/useAllCities';
import AlertTriangle from 'lucide-react/icons/triangle-alert';
import selectStyles from './selectStyles';

const CitySelect = ({ id, onChange, searchQuery, isDisabled }) => {
  const NoOptionsMessage = props => {
    const { error } = props.selectProps;

    return (
      <components.NoOptionsMessage {...props}>
        {error ? (
          <div className="flex items-center gap-4 text-red-500">
            <AlertTriangle className="h-6 w-6" />
            <span className="font-fourth text-base">Error loading cities</span>
          </div>
        ) : (
          'No options'
        )}
      </components.NoOptionsMessage>
    );
  };

  const { data, error, isLoading } = useAllCities({
    pageSize: 200,
    searchQuery,
  });

  const citiesList = useMemo(() => data.map(item => item.name), [data]);
  const citiesOptions = useMemo(
    () => citiesList.map(name => ({ value: name, label: name })),
    [citiesList],
  );

  return (
    <Select
      id={id}
      options={citiesOptions}
      isLoading={isLoading}
      isClearable
      placeholder="Select a city"
      onChange={onChange}
      components={{ NoOptionsMessage }}
      error={error}
      isDisabled={isDisabled}
      styles={selectStyles}
    />
  );
};

export default memo(CitySelect);

import { useMemo, memo } from 'react';
import Select, { components } from 'react-select';
import useAllCountries from '../../hooks/useAllCountries';
import AlertTriangle from 'lucide-react/icons/triangle-alert';
import selectStyles from './selectStyles';

const CountrySelect = ({ id, onChange }) => {
  const NoOptionsMessage = props => {
    const { error } = props.selectProps;

    return (
      <components.NoOptionsMessage {...props}>
        {error ? (
          <div className="flex items-center gap-4 text-red-500">
            <AlertTriangle className="h-6 w-6" />
            <span className="font-fourth text-base">
              Error loading countries
            </span>
          </div>
        ) : (
          'No options'
        )}
      </components.NoOptionsMessage>
    );
  };

  const { data, error, isLoading } = useAllCountries({
    pageSize: 200,
  });

  const countriesList = useMemo(
    () => data.map(item => ({ id: item.id, name: item.name })),
    [data],
  );

  const countriesOptions = useMemo(
    () => countriesList.map(({ id, name }) => ({ value: id, label: name })),
    [countriesList],
  );

  return (
    <Select
      id={id}
      options={countriesOptions}
      isLoading={isLoading}
      isClearable
      placeholder="Select a country"
      onChange={onChange}
      components={{ NoOptionsMessage }}
      error={error}
      styles={selectStyles}
    />
  );
};

export default memo(CountrySelect);

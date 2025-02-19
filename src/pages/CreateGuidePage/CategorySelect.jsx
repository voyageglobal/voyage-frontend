import { useMemo, memo } from 'react';
import Select, { components } from 'react-select';
import useAllCategories from '../../hooks/useAllCategories';
import AlertTriangle from 'lucide-react/icons/triangle-alert';
import selectStyles from './selectStyles';

const CategorySelect = ({ id, onChange }) => {
  const NoOptionsMessage = props => {
    const { error } = props.selectProps;

    return (
      <components.NoOptionsMessage {...props}>
        {error ? (
          <div className="flex items-center gap-4 text-red-500">
            <AlertTriangle className="h-6 w-6" />
            <span className="font-fourth text-base">
              Error loading categories
            </span>
          </div>
        ) : (
          'No options'
        )}
      </components.NoOptionsMessage>
    );
  };

  const {
    data: categories = [],
    isLoading: loadingCategories,
    error: errorCategories,
  } = useAllCategories();

  const categoriesList = useMemo(
    () => categories.map(item => item.name),
    [categories],
  );
  const categoriesOptions = useMemo(
    () => categoriesList.map(name => ({ value: name, label: name })),
    [categoriesList],
  );

  return (
    <Select
      id={id}
      options={categoriesOptions}
      isLoading={loadingCategories}
      isClearable
      placeholder="Select a category"
      onChange={onChange}
      components={{ NoOptionsMessage }}
      error={errorCategories}
      styles={selectStyles}
    />
  );
};

export default memo(CategorySelect);

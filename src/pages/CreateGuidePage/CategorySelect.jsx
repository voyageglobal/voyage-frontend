import { useMemo, memo } from 'react';
import Select, { components } from 'react-select';
import useAllCategories from '../../hooks/useAllCategories';
import DynamicIcon from '../../components/common/DynamicIcon/DynamicIcon';
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
          <span className="font-fourth text-base text-gray-500">
            No options
          </span>
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
    () =>
      categories.map(item => ({
        name: item.name,
        iconName: item.iconName,
      })),
    [categories],
  );

  const categoriesOptions = useMemo(
    () =>
      categoriesList.map(({ name, iconName }) => ({
        value: name,
        label: name,
        iconName,
      })),
    [categoriesList],
  );

  const SingleValue = ({ data, ...props }) => (
    <components.SingleValue {...props}>
      <div className="flex items-center justify-between gap-2 text-dark-color/80">
        <span className="w-3/4 font-fourth text-base">{data.label}</span>
        <DynamicIcon name={data.iconName} size="20px" />
      </div>
    </components.SingleValue>
  );

  const Option = props => {
    const { data, innerRef, innerProps } = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2 text-dark-color transition-all hover:bg-gray-200"
      >
        <span className="w-3/4 font-fourth text-base">{data.label}</span>
        <DynamicIcon name={data.iconName} size="20px" />
      </div>
    );
  };

  return (
    <Select
      id={id}
      options={categoriesOptions}
      isLoading={loadingCategories}
      isClearable
      placeholder="Select a category"
      onChange={onChange}
      components={{ NoOptionsMessage, SingleValue, Option }}
      error={errorCategories}
      styles={selectStyles}
    />
  );
};

export default memo(CategorySelect);

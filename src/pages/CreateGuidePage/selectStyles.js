const selectStyles = {
  control: (base, state) => ({
    ...base,
    height: '53px',
    paddingLeft: '18px',
    backgroundColor: state.isDisabled ? '#f0f0f0' : 'rgba(239, 130, 0, 0.15)',
    borderColor: state.isDisabled ? '#d6d6d6' : 'rgb(239, 130, 0)',
    borderRadius: '10px',
    boxShadow: state.isFocused ? '0 0 0 1px rgba(239, 130, 0, 0.75)' : 'none',
    '&:hover': {
      borderColor: state.isDisabled ? '#d6d6d6' : 'rgb(255, 165, 0, 1)',
    },
    fontFamily: 'Josefin Sans',
    fontSize: '22px',
    color: state.isDisabled ? '#a0a0a0' : 'rgb(23, 23, 23)',
    cursor: state.isDisabled ? 'not-allowed' : 'default',
  }),

  placeholder: base => ({
    ...base,
    color: 'rgb(23, 23, 23)',
  }),

  singleValue: base => ({
    ...base,
    color: 'rgb(23, 23, 23)',
  }),

  dropdownIndicator: (base, { isDisabled }) => ({
    ...base,
    color: isDisabled ? '#a0a0a0' : 'rgb(239, 130, 0)',
    '&:hover': {
      color: isDisabled ? '#a0a0a0' : 'rgb(255, 165, 0)',
    },
  }),

  clearIndicator: (base, { isDisabled }) => ({
    ...base,
    color: isDisabled ? '#a0a0a0' : 'rgb(239, 130, 0)',
    '&:hover': {
      color: isDisabled ? '#a0a0a0' : 'rgb(255, 165, 0)',
    },
  }),

  indicatorSeparator: (base, { isDisabled, hasValue }) => ({
    ...base,
    backgroundColor: hasValue
      ? isDisabled
        ? '#a0a0a0'
        : 'rgb(239, 130, 0)'
      : 'transparent',
  }),

  menu: base => ({
    ...base,
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
  }),

  menuList: base => ({
    ...base,
    padding: 0,
    borderRadius: '10px',
    minHeight: '40px',
  }),

  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected
      ? 'rgba(239, 130, 0, 0.8)'
      : isFocused
        ? 'rgba(239, 130, 0, 0.25)'
        : 'white',
    color: isSelected ? 'white' : 'rgb(23, 23, 23)',
    padding: '10px 18px',
    fontFamily: 'Josefin Sans',
    fontSize: '16px',
    cursor: 'pointer',
    '&:active': {
      backgroundColor: 'rgba(239, 130, 0, 0.8)',
    },
  }),
};

export default selectStyles;

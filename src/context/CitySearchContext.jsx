import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';

const CitySearchContext = createContext({
  searchQuery: '',
  setSearchQuery: () => {},
});

export const useCitySearch = () => useContext(CitySearchContext);

export const CitySearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const updateSearchQuery = useCallback(query => {
    setSearchQuery(query);
  }, []);

  const value = useMemo(
    () => ({ searchQuery, setSearchQuery: updateSearchQuery }),
    [searchQuery, updateSearchQuery],
  );

  return (
    <CitySearchContext.Provider value={value}>
      {children}
    </CitySearchContext.Provider>
  );
};

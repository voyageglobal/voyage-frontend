import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';

const CitiesDataContext = createContext({
  citiesData: [],
  isDataLoaded: false,
  updateCitiesData: () => {},
});

export const useCitiesData = () => useContext(CitiesDataContext);

export const CitiesDataProvider = ({ children }) => {
  const [citiesData, setCitiesData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const updateCitiesData = useCallback(data => {
    setCitiesData(data);
    setIsDataLoaded(true);
  }, []);

  const value = useMemo(
    () => ({
      citiesData,
      isDataLoaded,
      updateCitiesData,
    }),
    [citiesData, isDataLoaded, updateCitiesData],
  );

  return (
    <CitiesDataContext.Provider value={value}>
      {children}
    </CitiesDataContext.Provider>
  );
};

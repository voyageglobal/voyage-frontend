import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [citiesData, setCitiesData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const updateCitiesData = data => {
    setCitiesData(data);
    setIsDataLoaded(true);
  };

  return (
    <DataContext.Provider
      value={{ citiesData, isDataLoaded, updateCitiesData }}
    >
      {children}
    </DataContext.Provider>
  );
};

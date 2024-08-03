import { CitySearchProvider } from '../context/CitySearchContext';

const withCitySearchProvider = Component => {
  return function WrappedComponent(props) {
    return (
      <CitySearchProvider>
        <Component {...props} />
      </CitySearchProvider>
    );
  };
};

export default withCitySearchProvider;

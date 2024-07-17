import useAllCities from '../../../hooks/useAllCities';
import CitiesList from './CitiesList';

const AllCitiesList = ({ limit, increaseLimit, showLoadMoreButton }) => (
  <CitiesList
    limit={limit}
    increaseLimit={increaseLimit}
    showLoadMoreButton={showLoadMoreButton}
    useCitiesHook={useAllCities}
  />
);

export default AllCitiesList;

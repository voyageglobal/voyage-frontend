import usePopularCities from '../../../hooks/usePopularCities';
import CitiesList from './CitiesList';

const PopularCitiesList = ({ limit, increaseLimit }) => (
  <CitiesList
    limit={limit}
    increaseLimit={increaseLimit}
    showLoadMoreButton={false}
    useCitiesHook={usePopularCities}
  />
);

export default PopularCitiesList;

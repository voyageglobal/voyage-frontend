import HistoricalIcon from '../assets/img/CategoriesCards/Icons/HistoricalIcon.svg';
import PhotoIcon from '../assets/img/CategoriesCards/Icons/PhotoIcon.svg';
import FoodIcon from '../assets/img/CategoriesCards/Icons/FoodIcon.svg';
import CultureIcon from '../assets/img/CategoriesCards/Icons/CultureIcon.svg';
import ParksIcon from '../assets/img/CategoriesCards/Icons/ParksIcon.svg';
import MarketIcon from '../assets/img/CategoriesCards/Icons/MarketIcon.svg';

import HistoricalLocations from '../assets/img/CategoriesCards/HistoricalLocations.png';
import PhotoLocations from '../assets/img/CategoriesCards/PhotoLocations.png';
import FoodTour from '../assets/img/CategoriesCards/FoodTour.png';
import CulturalEvents from '../assets/img/CategoriesCards/CulturalEvents.png';
import Parks from '../assets/img/CategoriesCards/Parks.png';
import Markets from '../assets/img/CategoriesCards/Markets.png';
import NoCategory from '../assets/img/CategoriesCards/NoCategory.png';

const CategoriesButtonsData = [
  {
    key: 'HISTORICAL',
    categoryName: 'Historical landmarks',
    icon: <HistoricalIcon />,
    backgroundImage: HistoricalLocations,
  },
  {
    key: 'PHOTO',
    categoryName: 'Photographic locations',
    icon: <PhotoIcon />,
    backgroundImage: PhotoLocations,
  },
  {
    key: 'FOOD',
    categoryName: 'Food Tour',
    icon: <FoodIcon />,
    backgroundImage: FoodTour,
  },
  {
    key: 'CULTURE',
    categoryName: 'Cultural events and museums',
    icon: <CultureIcon />,
    backgroundImage: CulturalEvents,
  },
  {
    key: 'PARKS',
    categoryName: 'Parks and natural areas',
    icon: <ParksIcon />,
    backgroundImage: Parks,
  },
  {
    key: 'MARKET',
    categoryName: 'Traditional markets and souvenir shops',
    icon: <MarketIcon />,
    backgroundImage: Markets,
  },
  {
    key: 'NO_CATEGORY',
    categoryName: 'Without Category',
    backgroundImage: NoCategory,
  },
];

export default CategoriesButtonsData;

export const Icons = {
  Historical: <HistoricalIcon />,
  Photo: <PhotoIcon />,
  Food: <FoodIcon />,
  Culture: <CultureIcon />,
  Parks: <ParksIcon />,
  Market: <MarketIcon />,
};

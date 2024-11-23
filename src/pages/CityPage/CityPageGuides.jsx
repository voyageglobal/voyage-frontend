import { useState, memo } from 'react';
import { Link } from 'react-router-dom';

import GuideCard from '../../components/common/GuideCard/GuideCard';
import CategoryCard from '../../components/common/CategoriesCards/CategoryCard';
import CreateGuideButton from '../../components/common/CreateGuideButton/CreateGuideButton';

import HistoricalIcon from '../../assets/img/CategoriesCards/Icons/HistoricalIcon.svg';
import PhotoIcon from '../../assets/img/CategoriesCards/Icons/PhotoIcon.svg';
import FoodIcon from '../../assets/img/CategoriesCards/Icons/FoodIcon.svg';
import CultureIcon from '../../assets/img/CategoriesCards/Icons/CultureIcon.svg';
import ParksIcon from '../../assets/img/CategoriesCards/Icons/ParksIcon.svg';
import MarketIcon from '../../assets/img/CategoriesCards/Icons/MarketIcon.svg';

import HistoricalLocations from '../../assets/img/CategoriesCards/HistoricalLocations.png';
import PhotoLocations from '../../assets/img/CategoriesCards/PhotoLocations.png';
import FoodTour from '../../assets/img/CategoriesCards/FoodTour.png';
import CulturalEvents from '../../assets/img/CategoriesCards/CulturalEvents.png';
import Parks from '../../assets/img/CategoriesCards/Parks.png';
import Markets from '../../assets/img/CategoriesCards/Markets.png';
import NoCategory from '../../assets/img/CategoriesCards/NoCategory.png';
import Stub from '../../assets/img/cities/Stub.png';

const CategoriesButtonsData = [
  {
    categoryName: 'Historical landmarks',
    icon: <HistoricalIcon />,
    backgroundImage: HistoricalLocations,
  },
  {
    categoryName: 'Photographic locations',
    icon: <PhotoIcon />,
    backgroundImage: PhotoLocations,
  },
  {
    categoryName: 'Food Tour',
    icon: <FoodIcon />,
    backgroundImage: FoodTour,
  },
  {
    categoryName: 'Cultural events and museums',
    icon: <CultureIcon />,
    backgroundImage: CulturalEvents,
  },
  {
    categoryName: 'Parks and natural areas',
    icon: <ParksIcon />,
    backgroundImage: Parks,
  },
  {
    categoryName: 'Traditional markets and souvenir shops',
    icon: <MarketIcon />,
    backgroundImage: Markets,
  },
  {
    categoryName: 'Without Category',
    backgroundImage: NoCategory,
  },
];

const CityPageGuides = () => {
  const [activeButtons, setActiveButtons] = useState([]);

  const handleButtonClick = buttonName => {
    setActiveButtons(prevActiveButtons => {
      if (buttonName === 'Without Category') {
        return prevActiveButtons.includes(buttonName)
          ? []
          : CategoriesButtonsData.map(button => button.text);
      }

      const isActive = prevActiveButtons.includes(buttonName);
      if (isActive) {
        const updatedButtons = prevActiveButtons.filter(
          name => name !== buttonName,
        );
        return updatedButtons.length === 0 ? [] : updatedButtons;
      } else {
        return [...prevActiveButtons, buttonName];
      }
    });
  };
  let titleStub =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet vel dolorum dicta ducimus accusamus ex, sint deleniti quos earum ad quibusdam totam, obcaecati velit impedit, quam odio quaerat deserunt debitis?';

  return (
    <>
      <section className="min-h-96 pt-12">
        <div className="container mx-auto">
          <h3 className="font-fourth text-xl">Select a guide category</h3>
          <div className="mt-10 flex justify-between">
            {CategoriesButtonsData.map(
              ({ categoryName, icon, backgroundImage }) => (
                <CategoryCard
                  key={categoryName}
                  title={categoryName}
                  isActive={activeButtons.includes(categoryName)}
                  onClick={() => handleButtonClick(categoryName)}
                  icon={icon}
                  backgroundImage={backgroundImage}
                />
              ),
            )}
          </div>
        </div>
      </section>
      <section className="min-h-96 pt-12">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="font-fourth text-dark-color">
              <h3 className="inline-block pr-2.5 text-xl">
                Guides to the city of
              </h3>

              <Link
                className="inline-block text-2xl underline transition duration-300 ease-in-out hover:text-orange-color"
                to="/cities"
              >
                <h2>ROME</h2>
              </Link>
            </div>
            <CreateGuideButton />
          </div>

          <div className="mt-10 flex justify-between">
            <GuideCard
              key={titleStub}
              guideTitle={titleStub}
              isActive={activeButtons.includes(titleStub)}
              onClick={() => handleButtonClick(titleStub)}
              icons={<CultureIcon />}
              backgroundImage={Stub}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(CityPageGuides);

import { useState, memo } from 'react';
import { Link } from 'react-router-dom';

import GuideCard from '../../components/common/GuideCard/GuideCard';
import CategoryCard from '../../components/common/CategoriesCards/CategoryCard';
import CreateGuideButton from '../../components/common/CreateGuideButton/CreateGuideButton';

import CategoriesButtonsData, { Icons } from '../../data/categoriesData';
import Stub from '../../assets/img/cities/Stub.png';

const CityPageGuides = () => {
  const [activeKeys, setActiveKeys] = useState([]);

  const handleButtonClick = buttonKey => {
    setActiveKeys(prevActiveKeys => {
      if (buttonKey === 'NO_CATEGORY') {
        return [];
      }
      const isActive = prevActiveKeys.includes(buttonKey);
      return isActive
        ? prevActiveKeys.filter(key => key !== buttonKey)
        : [...prevActiveKeys, buttonKey];
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
              ({ key, categoryName, icon, backgroundImage }) => (
                <CategoryCard
                  key={key}
                  title={categoryName}
                  isActive={activeKeys.includes(key)}
                  onClick={() => handleButtonClick(key)}
                  icon={icon}
                  backgroundImage={backgroundImage}
                  withAriaPressed={key !== 'NO_CATEGORY'}
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
              isActive={activeKeys.includes('HISTORICAL')}
              onClick={() => handleButtonClick('HISTORICAL')}
              icons={Icons.Culture}
              backgroundImage={Stub}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(CityPageGuides);

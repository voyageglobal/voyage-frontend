import { useState, memo } from 'react';
import { Link } from 'react-router-dom';

import GuideCard from '../../components/common/GuideCard/GuideCard';
import CategoryCard from '../../components/common/CategoriesCards/CategoryCard';
import CreateGuideButton from '../../components/common/CreateGuideButton/CreateGuideButton';

import CategoriesButtonsData, { Icons } from '../../data/categoriesData';
import Stub from '../../assets/img/cities/Stub.png';

const CityPageGuides = () => {
  const [activeButtons, setActiveButtons] = useState([]);

  const handleButtonClick = buttonKey => {
    const isActive = activeButtons.includes(buttonKey);

    setActiveButtons(prevActiveButtons => {
      if (buttonKey === 'NO_CATEGORY') {
        return isActive ? [] : CategoriesButtonsData.map(button => button.key);
      }
      return isActive
        ? prevActiveButtons.filter(key => key !== buttonKey)
        : [...prevActiveButtons, buttonKey];
    });
  };

  const titleStub =
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
                  isActive={activeButtons.includes(key)}
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

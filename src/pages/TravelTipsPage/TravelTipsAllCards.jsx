import TravelTipsBtn from '../../components/common/Buttons/TravelTipsButtons/TravelTipsBtn';
import SearchPanelTravelTips from '../../components/common/SearchPanels/SearchPanelTravelTips';
import TravelTipsCard from '../../components/common/TravelTipsCard/TravelTipsCard';
import { useState } from 'react';

const TravelTipsAllCards = () => {
  const [activeButtons, setActiveButtons] = useState([]);

  const handleButtonClick = buttonName => {
    setActiveButtons(prevActiveButtons =>
      prevActiveButtons.includes(buttonName)
        ? prevActiveButtons.filter(name => name !== buttonName)
        : [...prevActiveButtons, buttonName],
    );
  };

  return (
    <section className="min-h-96 pt-16">
      <div className="container mx-auto flex justify-between">
        <div className="flex w-[47rem] justify-between">
          <TravelTipsBtn
            text="Packing"
            isActive={activeButtons.includes('Packing')}
            onClick={() => handleButtonClick('Packing')}
          />
          <TravelTipsBtn
            text="Transportation"
            isActive={activeButtons.includes('Transportation')}
            onClick={() => handleButtonClick('Transportation')}
          />
          <TravelTipsBtn
            text="Accommodation"
            isActive={activeButtons.includes('Accommodation')}
            onClick={() => handleButtonClick('Accommodation')}
          />
          <TravelTipsBtn
            text="Local Cuisine"
            isActive={activeButtons.includes('Local Cuisine')}
            onClick={() => handleButtonClick('Local Cuisine')}
          />
          <TravelTipsBtn
            text="Cheap Trip"
            isActive={activeButtons.includes('Cheap Trip')}
            onClick={() => handleButtonClick('Cheap Trip')}
          />
          <TravelTipsBtn
            text="All Tips"
            isActive={activeButtons.includes('All Tips')}
            onClick={() => handleButtonClick('All Tips')}
          />
        </div>
        <SearchPanelTravelTips />
      </div>
      <div className="container mx-auto mt-12 flex flex-wrap justify-start gap-5">
        <TravelTipsCard
          tipHeader="Write your first guide"
          tipText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet augue a erat semper elementum.Quisque eget risus ornare velit aliquet cursus. Quisque eget mollis diam..."
          date="05 JULY 2023"
          image=""
        />
        <TravelTipsCard
          tipHeader="Write your first guide"
          tipText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet augue a erat semper elementum.Quisque eget risus ornare velit aliquet cursus. Quisque eget mollis diam..."
          date="05 JULY 2023"
          image=""
        />
        <TravelTipsCard
          tipHeader="Write your first guide"
          tipText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet augue a erat semper elementum.Quisque eget risus ornare velit aliquet cursus. Quisque eget mollis diam..."
          date="05 JULY 2023"
          image=""
        />
        <TravelTipsCard
          tipHeader="Write your first guide"
          tipText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet augue a erat semper elementum.Quisque eget risus ornare velit aliquet cursus. Quisque eget mollis diam..."
          date="05 JULY 2023"
          image=""
        />
        <TravelTipsCard
          tipHeader="Write your first guide"
          tipText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet augue a erat semper elementum.Quisque eget risus ornare velit aliquet cursus. Quisque eget mollis diam..."
          date="05 JULY 2023"
          image=""
        />
        <TravelTipsCard
          tipHeader="Write your first guide"
          tipText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet augue a erat semper elementum.Quisque eget risus ornare velit aliquet cursus. Quisque eget mollis diam..."
          date="05 JULY 2023"
          image=""
        />
        <TravelTipsCard
          tipHeader="Write your first guide"
          tipText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet augue a erat semper elementum.Quisque eget risus ornare velit aliquet cursus. Quisque eget mollis diam..."
          date="05 JULY 2023"
          image=""
        />
      </div>
    </section>
  );
};

export default TravelTipsAllCards;

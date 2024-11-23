import TravelTipsBtn from '../../components/common/Buttons/TravelTipsButtons/TravelTipsBtn';
import SearchPanelTravelTips from '../../components/common/SearchPanels/SearchPanelTravelTips';
import TravelTipsCard from '../../components/common/TravelTipsCard/TravelTipsCard';
import tipsData from '../../data/tipsData';
import { useState, memo } from 'react';

const travelTipsButtons = [
  { key: 'PACKING', text: 'Packing' },
  { key: 'TRANSPORTATION', text: 'Transportation' },
  { key: 'ACCOMMODATION', text: 'Accommodation' },
  { key: 'LOCAL_CUISINE', text: 'Local Cuisine' },
  { key: 'CHEAP_TRIP', text: 'Cheap Trip' },
  { key: 'ALL', text: 'All Tips' },
];

const TravelTipsAllCards = () => {
  const [activeButtons, setActiveButtons] = useState([]);

  const handleButtonClick = buttonKey => {
    setActiveButtons(prevActiveButtons => {
      const isActive = prevActiveButtons.includes(buttonKey);
      if (buttonKey === 'ALL') {
        return isActive ? [] : travelTipsButtons.map(button => button.key);
      }

      return isActive
        ? prevActiveButtons.filter(key => key !== buttonKey)
        : [...prevActiveButtons, buttonKey];
    });
  };

  const filteredTips =
    activeButtons.length === 0 || activeButtons.includes('ALL')
      ? tipsData
      : tipsData.filter(tip => activeButtons.includes(tip.category.key));

  return (
    <section className="min-h-96 pt-16">
      <div className="container mx-auto flex justify-between">
        <div className="flex w-[47rem] justify-between">
          {travelTipsButtons.map(({ key, text }) => (
            <TravelTipsBtn
              key={key}
              text={text}
              isActive={activeButtons.includes(key)}
              onClick={() => handleButtonClick(key)}
            />
          ))}
        </div>
        <SearchPanelTravelTips />
      </div>
      <div className="container mx-auto mt-12 flex flex-wrap justify-start gap-5">
        {filteredTips.map(tip => (
          <TravelTipsCard
            key={tip.id}
            tipHeader={tip.tipHeader}
            tipText={tip.tipText}
            date={tip.date}
            image={tip.image}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(TravelTipsAllCards);

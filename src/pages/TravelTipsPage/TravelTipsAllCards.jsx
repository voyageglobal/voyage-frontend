import TravelTipsBtn from '../../components/common/Buttons/TravelTipsButtons/TravelTipsBtn';
import SearchPanelTravelTips from '../../components/common/SearchPanels/SearchPanelTravelTips';
import TravelTipsCard from '../../components/common/TravelTipsCard/TravelTipsCard';
import tipsData from '../../data/tipsData';
import { useState, memo } from 'react';

const TravelTipsAllCards = () => {
  const [activeButtons, setActiveButtons] = useState([]);

  const travelTipsButtons = [
    { text: 'Packing' },
    { text: 'Transportation' },
    { text: 'Accommodation' },
    { text: 'Local Cuisine' },
    { text: 'Cheap Trip' },
    { text: 'All Tips' },
  ];

  const handleButtonClick = buttonName => {
    setActiveButtons(prevActiveButtons => {
      if (buttonName === 'All Tips') {
        return prevActiveButtons.includes(buttonName)
          ? []
          : travelTipsButtons.map(button => button.text);
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

  const filteredTips =
    activeButtons.length === 0
      ? tipsData
      : tipsData.filter(tip => activeButtons.includes(tip.category));

  return (
    <section className="min-h-96 pt-16">
      <div className="container mx-auto flex justify-between">
        <div className="flex w-[47rem] justify-between">
          {travelTipsButtons.map(({ text }) => (
            <TravelTipsBtn
              key={text}
              text={text}
              isActive={activeButtons.includes(text)}
              onClick={() => handleButtonClick(text)}
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

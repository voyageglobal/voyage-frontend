import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import TravelTipsStub from '../../../assets/img/TravelTips/TravelTipsStub.png';
import Heart from './../../../assets/img/TravelTips/heart.svg';
import ReadMore from './../../../assets/img/TravelTips/read_more.svg';

const TravelTipsCard = ({ tipHeader, tipText, date, image }) => {
  const [likesAmount, setLikesAmount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const getShortText = (text, maxLength = 320) =>
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  const handleLikeClick = e => {
    e.preventDefault();
    setLikesAmount(prev => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  return (
    <Link className="inline-block" to="/travel-tips/id">
      <div className="flex min-h-[30rem] w-[17rem] flex-1 flex-col bg-white font-fourth shadow-md">
        <img
          className="h-64 w-full object-cover"
          src={image || TravelTipsStub}
          alt={`The picture of tip: ${tipHeader}`}
        />
        <div className="px-5 pb-4 pt-8 text-base">
          <p className="font-light uppercase italic">Posted on: {date}</p>
          <h3 className="text-xl/10 font-semibold">{tipHeader}</h3>
          <p className="break-words">{getShortText(tipText)}</p>

          <div className="mt-2.5 flex justify-between text-lg">
            <button
              className="flex items-center fill-current"
              onClick={handleLikeClick}
            >
              <Heart
                className={isLiked ? 'text-orange-color' : 'text-dark-color/80'}
              />
              {likesAmount > 0 && (
                <span className="mx-1 pt-1 text-lg font-semibold text-orange-color">
                  {likesAmount}
                </span>
              )}
            </button>
            <div className="flex items-center fill-current text-dark-color/80 hover:text-orange-color">
              <ReadMore />
              <p className="mx-1.5 w-24 pt-1 font-semibold underline">
                Read More
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(TravelTipsCard);

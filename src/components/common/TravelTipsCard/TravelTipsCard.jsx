import { memo, useState } from 'react';
import { cn } from '../../../utilities/cn';
import { Link } from 'react-router-dom';
import TravelTipsStub from '../../../assets/img/TravelTips/TravelTipsStub.png';
import Heart from './../../../assets/img/TravelTips/heart.svg';
import ReadMore from './../../../assets/img/TravelTips/read_more.svg';

const TravelTipsCard = ({ tipHeader, tipText, date, image }) => {
  const [likesAmount, setLikesAmount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = e => {
    e.preventDefault();
    setIsLiked(prevLiked => {
      const nextLikedState = !prevLiked;
      setLikesAmount(prev => (nextLikedState ? prev + 1 : prev - 1));
      return nextLikedState;
    });
  };

  return (
    <Link className="inline-block" to="/travel-tips/id">
      <div className="flex min-h-[36rem] w-[17rem] flex-1 flex-col bg-white font-fourth shadow-md">
        <img
          className="h-64 w-full object-cover"
          src={image || TravelTipsStub}
          alt={`The picture of tip: ${tipHeader}`}
        />
        <div className="flex flex-1 flex-col justify-between px-5 pb-4 pt-8 text-base">
          <div>
            <p className="font-light uppercase italic">Posted on: {date}</p>
            <h3 className="line-clamp-2 min-h-16 pt-2.5 text-xl font-semibold">
              {tipHeader}
            </h3>
            <p className="line-clamp-5 break-words pt-2.5">{tipText}</p>
          </div>

          <div className="mt-auto flex justify-between text-lg">
            <button
              className="flex items-center fill-current"
              onClick={handleLikeClick}
              aria-label={
                isLiked
                  ? 'Remove like from this travel tip'
                  : 'Add like to this travel tip'
              }
            >
              <Heart
                className={cn(
                  'fill-current',
                  isLiked ? 'text-orange-color' : 'text-dark-color/80',
                )}
              />
              {likesAmount > 0 && (
                <span className="mx-1 pt-1 text-lg font-semibold text-orange-color">
                  {likesAmount}
                </span>
              )}
            </button>
            <div
              className={cn(
                'flex items-center fill-current',
                'text-dark-color/80 hover:text-orange-color',
              )}
            >
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

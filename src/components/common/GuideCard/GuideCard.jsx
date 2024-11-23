import { memo } from 'react';
import { Link } from 'react-router-dom';
import ShareIcon from '../../../assets/img/CategoriesCards/Icons/ShareIcon.svg';
import FavouriteIcon from '../../../assets/img/CategoriesCards/Icons/FavouriteIcon.svg';

const GuideCard = ({ guideTitle, backgroundImage, icons }) => {
  return (
    <Link className="flex h-full" to="/cities/id">
      <div
        className="flex h-64 w-64 flex-col justify-between rounded-10px bg-white/30 p-1.5 font-primary shadow-md"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex justify-between">
          <FavouriteIcon style={{ width: '21px', height: '19px' }} />
          <ShareIcon />
        </div>

        <div className="mt-auto flex h-16 w-full items-center justify-between rounded-b-lg bg-light-color/80 px-2.5">
          <p className="mx-1.5 mt-2.5 line-clamp-1 break-words text-base">
            {guideTitle}
          </p>
          <div className="fill-current">{icons}</div>
        </div>
      </div>
    </Link>
  );
};

export default memo(GuideCard);

import { memo } from 'react';
import { cn } from '../../../../utilities/cn';

const TravelTipsBtn = ({ text, className, isActive, onClick }) => {
  return (
    <button
      className={cn(
        'inline-block h-10 w-auto rounded-10px border px-2 text-center font-fourth text-lg/9 font-normal',
        isActive
          ? 'border-dark-color bg-orange-color text-white'
          : 'border-dark-color text-dark-color',
        className,
      )}
      onClick={onClick}
      aria-label={`A button that sorts travel tips by parameter ${text}`}
    >
      {text}
    </button>
  );
};

export default memo(TravelTipsBtn);

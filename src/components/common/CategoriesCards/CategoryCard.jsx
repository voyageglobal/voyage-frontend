import { memo } from 'react';
import { cn } from '../../../utilities/cn';
import { NO_CATEGORY_BUTTON } from '../../../hooks/useAllCategories';

import Stub from '../../../assets/img/Stub.png';

const CategoryCard = ({
  categoryKey,
  title,
  className,
  isActive,
  backgroundImage,
  icon,
  onClick,
  withAriaPressed = true,
}) => {
  const ariaLabel =
    categoryKey === NO_CATEGORY_BUTTON.key
      ? 'A button that removes the selection from all category filters'
      : `A button that sorts city guides by parameter ${title}`;

  return (
    <button
      className={cn(
        'flex h-48 w-[8.625rem] transform rounded-lg transition duration-300 ease-in-out hover:text-orange-color hover:shadow-xl',
        isActive
          ? 'scale-105 stroke-current text-orange-color shadow-[0_0_15px_rgba(255,125,0,0.6)] ring-1 ring-inset ring-orange-color'
          : 'text-dark-color',

        className,
      )}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={withAriaPressed ? isActive : undefined}
      style={{
        backgroundImage: `url('${backgroundImage || Stub}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex h-16 w-full items-center justify-between self-end rounded-b-lg bg-light-color/80 px-2.5">
        <div className="mt-2 text-start font-fourth text-sm">{title}</div>
        <div className="stroke-current">{icon}</div>
      </div>
    </button>
  );
};

export default memo(CategoryCard);

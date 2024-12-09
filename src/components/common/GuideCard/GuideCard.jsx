import { useMemo, useState, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cn } from '../../../utilities/cn';
import Icon from '../Icon/Icon';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackIcon from '../../../utilities/FallbackIcon';

const GuideCard = ({
  guideId,
  guideTitle,
  guideText,
  backgroundImage,
  categories,
}) => {
  const [likesAmount, setLikesAmount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleLikeClick = e => {
    e.preventDefault();
    setIsLiked(prevLiked => {
      const nextLikedState = !prevLiked;
      setLikesAmount(prev => (nextLikedState ? prev + 1 : prev - 1));
      return nextLikedState;
    });
  };

  const handleShareClick = async e => {
    e.preventDefault();
    const guideUrl = `${window.location.origin}/cities/guides/${guideId}`;
    try {
      await navigator.clipboard.writeText(guideUrl);
      toast.success(`Copied to clipboard: ${guideUrl}`, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      toast.error('Failed to copy the link. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const categoryIcons = useMemo(
    () =>
      categories.map(category => (
        <Icon
          key={category.key}
          name={category.iconName}
          className="text-dark-color/80"
          size="20px"
        />
      )),
    [categories],
  );

  return (
    <>
      <Link
        className="flex h-full"
        to={`/cities/guides/${guideId}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex h-64 w-64 flex-col justify-between rounded-10px bg-white/30 font-primary shadow-md"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex justify-between">
            <div
              className={cn(
                'flex size-8 justify-center rounded-br-lg rounded-tl-lg bg-gray-300/60',
                isLiked ? 'w-10' : null,
              )}
            >
              <button
                className="flex items-center fill-current p-1.5"
                onClick={handleLikeClick}
                aria-label={
                  isLiked
                    ? 'Remove like from this guide'
                    : 'Add like to this guide'
                }
              >
                <Icon
                  name="heart"
                  size="24px"
                  className={cn(
                    'fill-current stroke-none hover:text-orange-color',
                    isLiked
                      ? 'text-xs text-orange-color'
                      : 'text-dark-color/80',
                  )}
                />
                {likesAmount > 0 && (
                  <span className="mx-1 pt-1 text-lg font-semibold text-orange-color">
                    {likesAmount}
                  </span>
                )}
              </button>
            </div>
            {isHovered ? (
              <div className="my-auto ml-2 w-9/12 text-left font-fourth text-lg font-light italic">
                <p>Voyager</p>
              </div>
            ) : null}
            <div className="flex size-8 justify-center rounded-bl-lg rounded-tr-lg bg-gray-300/60">
              <button
                className="fill-current"
                onClick={handleShareClick}
                aria-label="Share this guide"
              >
                <Icon
                  name="link"
                  size="21px"
                  strokeWidth={3}
                  className="text-dark-color/80 hover:text-orange-color"
                />
              </button>
            </div>
          </div>
          {isHovered ? (
            <div className="flex h-full w-full flex-col justify-between rounded-b-lg bg-light-color/90 p-2.5">
              <div className="mx-3.5 mt-2.5">
                <p
                  title={guideTitle}
                  className="line-clamp-3 break-words font-fourth text-lg font-medium"
                >
                  {guideTitle}
                </p>
                <p title={guideText} className="line-clamp-6 font-light">
                  {guideText}
                </p>
              </div>
              <Link
                to={`/cities/guides/${guideId}`}
                className="mx-3.5 underline hover:text-orange-color"
              >
                <p className="inline-block font-fourth text-lg font-medium">
                  Read More
                </p>
                <ErrorBoundary FallbackComponent={FallbackIcon}>
                  <Icon
                    name="arrow-right-to-line"
                    className="ml-0.5 inline-block"
                    size="20px"
                  />
                </ErrorBoundary>
              </Link>
            </div>
          ) : (
            <div className="mt-auto flex h-16 w-full items-center justify-between rounded-b-lg bg-light-color/90 px-2.5">
              <p
                title={guideTitle}
                className="mx-1.5 mt-2.5 line-clamp-2 break-words font-fourth text-lg font-medium"
              >
                {guideTitle}
              </p>
              <div className="flex max-w-20 flex-wrap justify-start gap-1.5">
                {categoryIcons}
              </div>
            </div>
          )}
        </div>
      </Link>
      <ToastContainer />
    </>
  );
};

export default memo(GuideCard);

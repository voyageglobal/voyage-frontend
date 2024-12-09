import { memo } from 'react';

const CategoriesSkeleton = () => {
  const skeletons = Array.from({ length: 7 });

  return (
    <div className="mt-10 flex justify-between">
      {skeletons.map((_, index) => (
        <div
          key={index}
          className="flex h-48 w-[8.625rem] animate-pulse flex-col rounded-lg bg-gray-200 shadow-md"
        >
          <div className="h-36 w-full rounded-t-lg bg-gray-300"></div>
          <div className="flex h-12 w-full items-center justify-between rounded-b-lg bg-gray-200 px-2.5">
            <div className="h-4 w-20 rounded bg-gray-300"></div>
            <div className="h-6 w-6 rounded-full bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(CategoriesSkeleton);

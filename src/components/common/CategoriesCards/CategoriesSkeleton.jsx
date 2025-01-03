import { memo } from 'react';
import ContentLoader from 'react-content-loader';

const CategoriesSkeleton = () => {
  return (
    <div className="mt-10 flex justify-between">
      {Array.from({ length: 7 }).map((_, index) => (
        <ContentLoader
          key={index}
          speed={3}
          width={138}
          height={192}
          viewBox="0 0 138 192"
          backgroundColor="#e5e7eb"
          foregroundColor="#d1d5db"
          className="rounded-lg shadow-md"
        >
          <rect x="0" y="0" rx="8" ry="8" width="138" height="144" />
          <rect x="10" y="160" rx="4" ry="4" width="80" height="16" />
          <circle cx="115" cy="168" r="18" />
        </ContentLoader>
      ))}
    </div>
  );
};

export default memo(CategoriesSkeleton);

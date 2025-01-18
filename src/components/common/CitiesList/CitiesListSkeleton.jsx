import { memo } from 'react';
import ContentLoader from 'react-content-loader';

const CitiesListSkeleton = () => {
  return (
    <ul className="mt-8 flex list-none flex-wrap justify-between gap-x-12 gap-y-8">
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index}>
          <ContentLoader
            speed={3}
            width={176}
            height={320}
            viewBox="0 0 176 320"
            backgroundColor="#e5e7eb"
            foregroundColor="#d1d5db"
            className="rounded-[10px] shadow-md"
          >
            <rect x="0" y="0" rx="10" ry="10" width="176" height="256" />

            <rect x="12" y="266" rx="4" ry="4" width="128" height="24" />
            <rect x="12" y="296" rx="4" ry="4" width="96" height="16" />
          </ContentLoader>
        </li>
      ))}
    </ul>
  );
};

export default memo(CitiesListSkeleton);

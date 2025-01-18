import { memo } from 'react';
import ContentLoader from 'react-content-loader';

const GuidesListSkeleton = () => {
  return (
    <ul className="mt-8 flex list-none flex-wrap justify-between gap-x-12 gap-y-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={index}>
          <ContentLoader
            speed={3}
            width={244}
            height={256}
            viewBox="0 0 244 256"
            backgroundColor="#e5e7eb"
            foregroundColor="#d1d5db"
            className="rounded-[10px] shadow-md"
          >
            <rect x="0" y="0" rx="10" ry="10" width="244" height="192" />

            <rect x="12" y="206" rx="4" ry="4" width="160" height="30" />
            <circle cx="212" cy="222" r="22" />
          </ContentLoader>
        </li>
      ))}
    </ul>
  );
};

export default memo(GuidesListSkeleton);

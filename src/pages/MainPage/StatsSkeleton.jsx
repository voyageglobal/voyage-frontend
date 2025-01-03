import ContentLoader from 'react-content-loader';

export const StatsSkeleton = () => (
  <ContentLoader
    speed={3}
    width={30}
    height={20}
    viewBox="0 0 30 20"
    backgroundColor="#e5e7eb"
    foregroundColor="#dbd3d1"
    className="inline-block"
  >
    <rect x="0" y="0" rx="4" ry="4" width="30" height="20" />
  </ContentLoader>
);

import ContentLoader from 'react-content-loader';

export const ThreeDotsSkeleton = () => (
  <ContentLoader
    speed={2}
    width={30}
    height={20}
    viewBox="0 0 30 20"
    backgroundColor="transparent"
    foregroundColor="#dbd3d1"
    className="inline-block"
  >
    <circle cx="6" cy="10" r="2" />
    <circle cx="15" cy="10" r="2" />
    <circle cx="24" cy="10" r="2" />
  </ContentLoader>
);

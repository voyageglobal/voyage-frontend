import ContentLoader from 'react-content-loader';

const GuideLoadingSkeleton = () => (
  <section className="min-h-64 pt-10">
    <div className="container mx-auto">
      <ContentLoader
        speed={2}
        width={1170}
        height={210}
        viewBox="0 0 1170 210"
        backgroundColor="#e5e7eb"
        foregroundColor="#d1d5db"
      >
        <rect x="5" y="5" rx="5" ry="5" width="20%" height="40" />
        <rect x="21%" y="5" rx="5" ry="5" width="10%" height="40" />

        <rect x="5" y="80" rx="5" ry="5" width="10%" height="40" />
        <rect x="11%" y="80" rx="5" ry="5" width="15%" height="40" />
        <rect x="90%" y="80" rx="5" ry="5" width="10%" height="40" />

        <rect x="6" y="140" rx="5" ry="5" width="70%" height="40" />

        <circle cx="94%" cy="145" r="20" />
        <circle cx="98%" cy="145" r="20" />
      </ContentLoader>
    </div>
  </section>
);

export default GuideLoadingSkeleton;

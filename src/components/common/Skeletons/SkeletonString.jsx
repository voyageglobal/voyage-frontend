import ContentLoader from 'react-content-loader';

const SkeletonString = ({ width, height, lines = 1, gap = 8 }) => {
  return (
    <ContentLoader
      className="inline-block align-middle"
      speed={2}
      width={width}
      height={height * lines + gap * (lines - 1)}
      viewBox={`0 0 ${width} ${height * lines + gap * (lines - 1)}`}
      backgroundColor="#e5e7eb"
      foregroundColor="#d1d5db"
    >
      {Array.from({ length: lines }, (_, i) => (
        <rect
          key={i}
          x="0"
          y={i * (height + gap)}
          rx="5"
          ry="5"
          width={width}
          height={height}
        />
      ))}
    </ContentLoader>
  );
};

export default SkeletonString;

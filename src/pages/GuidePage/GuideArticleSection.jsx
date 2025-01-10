import { useParams } from 'react-router-dom';
import useGuideById from '../../hooks/useGuideById';
import SkeletonString from '../../components/common/Skeletons/SkeletonString';

const GuideArticleSection = () => {
  const { id: guideId } = useParams();

  const { guide, isLoading: isGuideLoading } = useGuideById(guideId);

  const guideArticle = guide?.article;

  if (isGuideLoading) {
    return (
      <div className="container mx-auto">
        <SkeletonString width={1170} height={20} lines={5} />
      </div>
    );
  }
  if (!guide) return null;

  return (
    <div className="container mx-auto">
      <article className="text-start font-fourth text-xl/8">
        {guideArticle}
      </article>
      ;
    </div>
  );
};
export default GuideArticleSection;

import { useParams } from 'react-router-dom';
import useGuideById from '../../hooks/useGuideById';

const GuideArticleSection = () => {
  const { id: guideId } = useParams();

  const {
    guide,
    isLoading: isGuideLoading,
    error: guideError,
  } = useGuideById(guideId);

  const guideArticle = guide?.article;
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

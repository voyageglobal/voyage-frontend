import { Link } from 'react-router-dom';

const CreateGuideButton = () => {
  return (
    <Link
      to="/create-guide"
      className="inline-block h-8 w-56 rounded-10px bg-orange-color text-center font-fourth text-base/8 text-light-color"
    >
      CREATE GUIDE
    </Link>
  );
};

export default CreateGuideButton;

import { Link } from 'react-router-dom';

import FacebookIcon from '../../assets/img/facebookIcon.svg';
import InstaIcon from '../../assets/img/instaIcon.svg';
import TwitterIcon from '../../assets/img/twitterIcon.svg';
import PinterestIcon from '../../assets/img/pinterestIcon.svg';
import YoutubeIcon from '../../assets/img/youtubeIcon.svg';

const SocialNetworksSection = () => {
  return (
    <section className="container mx-auto min-h-48 pt-6">
      <h2 className="text-center font-third text-2xl font-normal">
        Our social networks
      </h2>
      <ul className="mt-8 flex list-none justify-around">
        <li>
          <Link to="#">
            <FacebookIcon />
          </Link>
        </li>
        <li>
          <Link to="#">
            <InstaIcon />
          </Link>
        </li>
        <li>
          <Link to="#">
            <TwitterIcon />
          </Link>
        </li>
        <li>
          <Link to="#">
            <PinterestIcon />
          </Link>
        </li>
        <li>
          <Link to="#">
            <YoutubeIcon />
          </Link>
        </li>
      </ul>
    </section>
  );
};
export default SocialNetworksSection;

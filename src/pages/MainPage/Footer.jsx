import LogoButton from '../../components/common/LogoButton/LogoButton';
import './footer.scss';

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-section__wrapper">
        <div className="footer-section__group">
          <h3 className="footer-section__title">
            <a href="#">Popular Guides</a>
          </h3>
          <ul className="footer-section__list">
            <li>
              <a href="#">Paris</a>
            </li>
            <li>
              <a href="#">Prague</a>
            </li>
            <li>
              <a href="#">New York</a>
            </li>
            <li>
              <a href="#">Rome</a>
            </li>
            <li>
              <a href="#">Tel Aviv</a>
            </li>
          </ul>
        </div>
        <div className="footer-section__group">
          <h3 className="footer-section__title">
            <a href="#">Travel Tips</a>
          </h3>
          <ul className="footer-section__list">
            <li>
              <a href="#">Packing</a>
            </li>
            <li>
              <a href="#">Transportation</a>
            </li>
            <li>
              <a href="#">Accommodation</a>
            </li>
            <li>
              <a href="#">Local Cuisine</a>
            </li>
            <li>
              <a href="#">Cheap Trip</a>
            </li>
          </ul>
        </div>
        <div className="footer-section__group">
          <h3 className="footer-section__title">
            <a href="#">About Us</a>
          </h3>
          <ul className="footer-section__list">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-section__group">
          <h3 className="footer-section__title">
            <a href="#">Follow Us</a>
          </h3>
          <ul className="footer-section__list">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Pinterest</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
        <div className="footer-section__group">
          <h3 className="footer-section__title">
            <a href="#">Legal</a>
          </h3>
          <ul className="footer-section__list">
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
            <li>
              <a href="#">DMCA Policy</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-section__rights">
        <LogoButton />
        <p>&copy; {new Date().getFullYear()} VOYAGE.COM ALL RIGHTS RESERVED</p>
      </div>
    </section>
  );
};

export default Footer;

import './contactsSection.scss';
import MailIcon from '../../assets/img/mailIcon.svg';
import FacebookIcon from '../../assets/img/facebookIcon.svg';
import InstaIcon from '../../assets/img/instaIcon.svg';
import TwitterIcon from '../../assets/img/twitterIcon.svg';
import PinterestIcon from '../../assets/img/pinterestIcon.svg';
import YoutubeIcon from '../../assets/img/youtubeIcon.svg';

const ContactsSection = () => {
  return (
    <section className="contacts">
      <div className="contacts__wrapper">
        <h2 className="contacts__title">CONTACT US </h2>
        <p className="contacts__text">
          We are always happy to hear from our users! If you have any questions,
          suggestions, or just want to share your thoughts about our website,
          feel free to contact us. We are ready to answer all your inquiries.
        </p>
        <div className="contacts__container">
          <div className="contacts__info">
            <h3 className="contacts__subtitle">Get in touch with us!</h3>
            <div className="contacts__info-mail">
              <MailIcon />
              <p className="contacts__info-title">EMAIL</p>
              <a href="#" className="contacts__info-email">
                voyage@gmail.com
              </a>
            </div>
            <div className="contacts__info-links">
              <h3 className="contacts__subtitle">Connect with us</h3>
              <ul className="contacts__info-list">
                <li className="contacts__info-list-item">
                  <a href="#">
                    <FacebookIcon />
                  </a>
                </li>
                <li className="contacts__info-list-item">
                  <a href="#">
                    <InstaIcon />
                  </a>
                </li>
                <li className="contacts__info-list-item">
                  <a href="#">
                    <TwitterIcon />
                  </a>
                </li>
                <li className="contacts__info-list-item">
                  <a href="#">
                    <PinterestIcon />
                  </a>
                </li>
                <li className="contacts__info-list-item">
                  <a href="#">
                    <YoutubeIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contacts__form">
            <h3 className="contacts__subtitle contacts__subtitle--form">
              If you got any questions <br /> Please do not hesitate to send us
              a message.
            </h3>
            <form className="contacts__form-container">
              <input type="text" name="name" placeholder="Your name" required />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
              <button className="contacts__form-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;

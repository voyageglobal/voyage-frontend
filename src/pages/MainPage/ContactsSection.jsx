import './contactsSection.scss';
import mailIcon from '../../assets/img/mailIcon.svg';
import FacebookIcon from '../../components/common/icons/Facebook';
import instaIcon from '../../assets/img/instaIcon.svg';
import twitterIcon from '../../assets/img/twitterIcon.svg';
import pinterestIcon from '../../assets/img/pinterestIcon.svg';
import youtubeIcon from '../../assets/img/youtubeIcon.svg';

const ContactsSection = () => {
  return (
    <section className="contacts">
      <div className="contacts-wrapper">
        <h2 className="contacts-title">CONTACT US </h2>
        <p className="contacts-text">
          We are always happy to hear from our users! If you have any questions,
          suggestions, or just want to share your thoughts about our website,
          feel free to contact us. We are ready to answer all your inquiries.
        </p>
        <div className="contacts-container">
          <div className="contacts-info">
            <h3 className="contacts-subtitle">Get in touch with us!</h3>
            <div className="contacts-info-mail">
              <img src={mailIcon} alt="The icon of letter" />
              <p className="contacts-info-title">EMAIL</p>
              <a href="#" className="contacts-info-email">
                voyage@gmail.com
              </a>
            </div>
            <div className="contacts-info-links">
              <h3 className="contacts-subtitle">Connect with us</h3>
              <ul className="contacts-info-list">
                <li className="contacts-info-list-item">
                  <a href="#">
                    <FacebookIcon />
                  </a>
                </li>
                <li className="contacts-info-list-item">
                  <a href="#">
                    <img src={instaIcon} alt="Instagram's icon" />
                  </a>
                </li>
                <li className="contacts-info-list-item">
                  <a href="#">
                    <img src={twitterIcon} alt="Twitter's icon" />
                  </a>
                </li>
                <li className="contacts-info-list-item">
                  <a href="#">
                    <img src={pinterestIcon} alt="Pinterest's icon" />
                  </a>
                </li>
                <li className="contacts-info-list-item">
                  <a href="#">
                    <img src={youtubeIcon} alt="Youtube's icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contacts-form">
            <h3 className="contacts-subtitle contacts-subtitle-form">
              If you got any questions <br /> Please do not hesitate to send us
              a message.
            </h3>
            <form>
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
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;

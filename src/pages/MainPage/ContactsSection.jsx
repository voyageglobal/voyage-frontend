import { Link } from 'react-router-dom';

import MailIcon from '../../assets/img/mailIcon.svg';
import FacebookIcon from '../../assets/img/facebookIcon.svg';
import InstaIcon from '../../assets/img/instaIcon.svg';
import TwitterIcon from '../../assets/img/twitterIcon.svg';
import PinterestIcon from '../../assets/img/pinterestIcon.svg';
import YoutubeIcon from '../../assets/img/youtubeIcon.svg';

const ContactsSection = () => {
  return (
    <section className="min-h-[41.81rem] pt-20">
      <div className="container mx-auto font-fourth">
        <h2 className="font-fourth text-2rem font-normal">CONTACT US </h2>
        <p className="mt-6 font-primary text-xl">
          We are always happy to hear from our users! If you have any questions,
          suggestions, or just want to share your thoughts about our website,
          feel free to contact us. We are ready to answer all your inquiries.
        </p>
        <div className="mt-16 grid gap-20 px-16 sm:grid-cols-1 xl:grid-cols-[20.4rem_39.3rem]">
          <div className="flex flex-col items-center pt-5">
            <h3 className="text-center font-fourth text-xl font-normal">
              Get in touch with us!
            </h3>
            <div className="mt-11 h-32 w-full rounded-10px text-center shadow-[6px_6px_6px_rgba(0,0,0,0.25)]">
              <MailIcon className="mt-5 inline-block" />
              <p className="mt-3 font-fourth text-base">EMAIL</p>
              <a
                href="mailto:voyage@gmail.com"
                className="mt-6 inline-block font-fourth text-lg text-dark-color"
              >
                voyage@gmail.com
              </a>
            </div>
            <div className="mt-32 w-full text-center">
              <h3 className="text-center font-fourth text-xl font-normal">
                Connect with us
              </h3>
              <ul className="mx-auto mt-5 flex w-80 list-none justify-between">
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
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="mb-2.5 w-full text-center font-fourth text-xl font-normal">
              If you got any questions <br /> Please don&apos;t hesitate to send
              us a message.
            </h3>
            <form className="flex w-full flex-col">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="mt-5 h-11 rounded-10px border-none bg-[rgba(23,23,23,0.25)] pl-5 font-fourth text-lg text-light-color placeholder:text-light-color"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="mt-5 h-11 rounded-10px border-none bg-[rgba(23,23,23,0.25)] pl-5 font-fourth text-lg text-light-color placeholder:text-light-color"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your message"
                required
                className="mt-5 h-40 rounded-10px border-none bg-[rgba(23,23,23,0.25)] pl-5 pt-2.5 font-fourth text-lg text-light-color placeholder:text-light-color"
              ></textarea>
              <button
                type="submit"
                className="mx-auto mt-6 h-10 w-44 cursor-pointer rounded-10px border-none bg-[rgba(23,23,23,0.82)] text-center font-fourth text-base uppercase text-light-color"
              >
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

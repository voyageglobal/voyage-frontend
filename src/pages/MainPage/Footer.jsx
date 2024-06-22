import LogoButton from '../../components/common/LogoButton/LogoButton';

const Footer = () => {
  return (
    <section className="min-h-96 pt-8">
      <div className="mx-auto flex max-w-[73.13rem] justify-between border-b border-t border-dark-color px-10 py-8">
        <div className="font-fourth">
          <h3 className="text-xl/3 font-semibold">
            <a href="#" className="text-dark-color">
              Popular Guides
            </a>
          </h3>
          <ul className="mt-4 inline-block text-xl font-light text-dark-color">
            <li className="mt-3.5">
              <a href="#">Paris</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Prague</a>
            </li>
            <li className="mt-3.5">
              <a href="#">New York</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Rome</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Tel Aviv</a>
            </li>
          </ul>
        </div>
        <div className="font-fourth">
          <h3 className="text-xl/3 font-semibold">
            <a href="#" className="text-dark-color">
              Travel Tips
            </a>
          </h3>
          <ul className="mt-4 inline-block text-xl font-light text-dark-color">
            <li className="mt-3.5">
              <a href="#">Packing</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Transportation</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Accommodation</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Local Cuisine</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Cheap Trip</a>
            </li>
          </ul>
        </div>
        <div className="font-fourth">
          <h3 className="text-xl/3 font-semibold">
            <a href="#" className="text-dark-color">
              About Us
            </a>
          </h3>
          <ul className="mt-4 inline-block text-xl font-light text-dark-color">
            <li className="mt-3.5">
              <a href="#">Contact</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Terms</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="mt-3.5">
              <a href="#">FAQ</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="font-fourth">
          <h3 className="text-xl/3 font-semibold">
            <a href="#" className="text-dark-color">
              Follow Us
            </a>
          </h3>
          <ul className="mt-4 inline-block text-xl font-light text-dark-color">
            <li className="mt-3.5">
              <a href="#">Facebook</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Instagram</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Twitter</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Pinterest</a>
            </li>
            <li className="mt-3.5">
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
        <div className="font-fourth">
          <h3 className="text-xl/3 font-semibold">
            <a href="#" className="text-dark-color">
              Legal
            </a>
          </h3>
          <ul className="mt-4 inline-block text-xl font-light text-dark-color">
            <li className="mt-3.5">
              <a href="#">Terms of Use</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Cookie Policy</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Disclaimer</a>
            </li>
            <li className="mt-3.5">
              <a href="#">DMCA Policy</a>
            </li>
            <li className="mt-3.5">
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[73.13rem] items-center justify-between pb-4 pt-7">
        <LogoButton />
        <p className="font-fourth w-48 text-right">
          &copy; {new Date().getFullYear()} VOYAGE.COM ALL RIGHTS RESERVED
        </p>
      </div>
    </section>
  );
};

export default Footer;

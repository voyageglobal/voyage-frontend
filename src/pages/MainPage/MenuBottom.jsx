import { Link } from 'react-router-dom';

const MenuBottom = () => {
  return (
    <section className="min-h-80 py-16">
      <div className="container mx-auto">
        <div className="mx-auto flex justify-between border-b border-t border-dark-color px-10 py-8">
          <div className="font-fourth">
            <h3 className="text-xl/3 font-semibold">
              <Link
                to="/cities-guides"
                className="text-dark-color visited:text-purple-900"
              >
                Popular Guides
              </Link>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light text-dark-color">
              <li className="mt-3.5">
                <Link
                  className="visited:text-purple-900"
                  to="/cities-guides/id"
                >
                  Paris
                </Link>
              </li>
              <li className="mt-3.5">
                <Link
                  className="visited:text-purple-900"
                  to="/cities-guides/id"
                >
                  Prague
                </Link>
              </li>
              <li className="mt-3.5">
                <Link
                  className="visited:text-purple-900"
                  to="/cities-guides/id"
                >
                  New York
                </Link>
              </li>
              <li className="mt-3.5">
                <Link
                  className="visited:text-purple-900"
                  to="/cities-guides/id"
                >
                  Rome
                </Link>
              </li>
              <li className="mt-3.5">
                <Link
                  className="visited:text-purple-900"
                  to="/cities-guides/id"
                >
                  Tel Aviv
                </Link>
              </li>
            </ul>
          </div>
          <div className="font-fourth">
            <h3 className="text-xl/3 font-semibold">
              <Link
                to="/travel-tips"
                className="text-dark-color visited:text-purple-900"
              >
                Travel Tips
              </Link>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light text-dark-color">
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/travel-tips">
                  Packing
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/travel-tips">
                  Transportation
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/travel-tips">
                  Accommodation
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/travel-tips">
                  Local Cuisine
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/travel-tips">
                  Cheap Trip
                </Link>
              </li>
            </ul>
          </div>
          <div className="font-fourth">
            <h3 className="text-xl/3 font-semibold">
              <Link
                to="/about-us"
                className="text-dark-color visited:text-purple-900"
              >
                About Us
              </Link>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light text-dark-color">
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/contacts">
                  Contact
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/about-us">
                  Terms
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/about-us">
                  Privacy Policy
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/about-us">
                  FAQ
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/about-us">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="font-fourth">
            <h3 className="text-xl/3 font-semibold">
              <Link
                to="/contacts"
                className="text-dark-color visited:text-purple-900"
              >
                Follow Us
              </Link>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light text-dark-color">
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/contacts">
                  Facebook
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/contacts">
                  Instagram
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/contacts">
                  Twitter
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/contacts">
                  Pinterest
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="/contacts">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
          <div className="font-fourth">
            <h3 className="text-xl/3 font-semibold">
              <Link to="#" className="text-dark-color visited:text-purple-900">
                Legal
              </Link>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light text-dark-color">
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="#">
                  Terms of Use
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="#">
                  Cookie Policy
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="#">
                  Disclaimer
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="#">
                  DMCA Policy
                </Link>
              </li>
              <li className="mt-3.5">
                <Link className="visited:text-purple-900" to="#">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuBottom;

import { Link } from 'react-router-dom';

export function MenuBottomLink(props) {
  return (
    <Link {...props} className={`text-dark-color visited:text-purple-900`} />
  );
}

const MenuBottom = () => {
  return (
    <section className="min-h-80 py-16">
      <div className="container mx-auto">
        <div className="mx-auto flex justify-between border-b border-t border-dark-color px-10 py-8">
          <div className="font-fourth">
            <h3 className="text-xl/3 font-semibold">
              <MenuBottomLink to="/cities">Popular Guides</MenuBottomLink>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light">
              <li className="mt-3.5">
                <MenuBottomLink to="/cities/id">Paris</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/cities/id">Prague</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/cities/id">New York</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/cities/id">Rome</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/cities/id">Tel Aviv</MenuBottomLink>
              </li>
            </ul>
          </div>
          <div className="font-fourth">
            <h3 className="text-xl/3 font-semibold">
              <MenuBottomLink to="/travel-tips">Travel Tips</MenuBottomLink>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light">
              <li className="mt-3.5">
                <MenuBottomLink to="/travel-tips">Packing</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/travel-tips">
                  Transportation
                </MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/travel-tips">Accommodation</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/travel-tips">Local Cuisine</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/travel-tips">Cheap Trip</MenuBottomLink>
              </li>
            </ul>
          </div>
          <div className="font-fourth">
            <h3 className="text-xl/3 font-semibold">
              <MenuBottomLink to="/about-us">About Us</MenuBottomLink>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light">
              <li className="mt-3.5">
                <MenuBottomLink to="/contacts">Contact</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/about-us">Terms</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/about-us">Privacy Policy</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/about-us">FAQ</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/about-us">Blog</MenuBottomLink>
              </li>
            </ul>
          </div>
          <div className="font-fourth">
            <h3 className="text-xl/3 font-semibold">
              <MenuBottomLink to="/contacts">Follow Us</MenuBottomLink>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light">
              <li className="mt-3.5">
                <MenuBottomLink to="/contacts">Facebook</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/contacts">Instagram</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/contacts">Twitter</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/contacts">Pinterest</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="/contacts">YouTube</MenuBottomLink>
              </li>
            </ul>
          </div>
          <div className="font-fourth">
            <h3 className="text-xl/3 font-semibold">
              <MenuBottomLink>Legal</MenuBottomLink>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light">
              <li className="mt-3.5">
                <MenuBottomLink to="#">Terms of Use</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="#">Cookie Policy</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="#">Disclaimer</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="#">DMCA Policy</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to="#">Sitemap</MenuBottomLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuBottom;

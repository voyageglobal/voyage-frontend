import { Link } from 'react-router-dom';
import { ROUTES } from '../../App';

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
              <MenuBottomLink to={ROUTES.cities}>Popular Guides</MenuBottomLink>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light">
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.city}>Paris</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.city}>Prague</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.city}>New York</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.city}>Rome</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.city}>Tel Aviv</MenuBottomLink>
              </li>
            </ul>
          </div>
          <div className="font-fourth">
            <h3 className="text-xl/3 font-semibold">
              <MenuBottomLink to={ROUTES.travelTips}>
                Travel Tips
              </MenuBottomLink>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light">
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.travelTips}>Packing</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.travelTips}>
                  Transportation
                </MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.travelTips}>
                  Accommodation
                </MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.travelTips}>
                  Local Cuisine
                </MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.travelTips}>
                  Cheap Trip
                </MenuBottomLink>
              </li>
            </ul>
          </div>
          <div className="font-fourth">
            <h3 className="text-xl/3 font-semibold">
              <MenuBottomLink to={ROUTES.aboutUs}>About Us</MenuBottomLink>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light">
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.contacts}>Contact</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.aboutUs}>Terms</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.aboutUs}>
                  Privacy Policy
                </MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.aboutUs}>FAQ</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.aboutUs}>Blog</MenuBottomLink>
              </li>
            </ul>
          </div>
          <div className="font-fourth">
            <h3 className="text-xl/3 font-semibold">
              <MenuBottomLink to={ROUTES.contacts}>Follow Us</MenuBottomLink>
            </h3>
            <ul className="mt-4 inline-block text-xl font-light">
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.contacts}>Facebook</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.contacts}>Instagram</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.contacts}>Twitter</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.contacts}>Pinterest</MenuBottomLink>
              </li>
              <li className="mt-3.5">
                <MenuBottomLink to={ROUTES.contacts}>YouTube</MenuBottomLink>
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

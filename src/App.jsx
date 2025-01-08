import ScrollToTopOrHash from './hooks/ScrollToTopOrHash';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import CitiesPage from './pages/CitiesPage/CitiesPage';
import CityPage from './pages/CityPage/CityPage';
import SignInPage from './pages/SignInPage/SignInPage';
import TravelTipsPage from './pages/TravelTipsPage/TravelTipsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MainPage from './pages/MainPage/MainPage';
import CreateGuidePage from './pages/CreateGuidePage/CreateGuidePage';
import GuidePage from './pages/GuidePage/GuidePage';

export const ROUTES = {
  main: '/',
  aboutUs: '/about-us',
  cities: '/cities',
  city: '/cities/:id',
  popularCities: '/#popularCities',
  contacts: '/#contacts',
  signIn: '/sign-in',
  travelTips: '/travel-tips',
  createGuide: '/create-guide',
  guidePage: '/guides/:id',
  notFound: '*',
};

function App() {
  return (
    <>
      <ScrollToTopOrHash />
      <Routes>
        <Route path={ROUTES.main} element={<MainPage />} />
        <Route path={ROUTES.aboutUs} element={<AboutUsPage />} />
        <Route path={ROUTES.cities} element={<CitiesPage />} />
        <Route path={ROUTES.city} element={<CityPage />} />
        <Route path={ROUTES.guidePage} element={<GuidePage />} />
        <Route path={ROUTES.signIn} element={<SignInPage />} />
        <Route path={ROUTES.travelTips} element={<TravelTipsPage />} />
        <Route path={ROUTES.createGuide} element={<CreateGuidePage />} />
        <Route path={ROUTES.notFound} element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

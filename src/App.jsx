import ScrollToTopOrHash from './hooks/ScrollToTopOrHash';
import { Routes, Route } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import CitiesPage from './pages/CitiesPage/CitiesPage';
import CityPage from './pages/CityPage/CityPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import SignInPage from './pages/SignInPage/SignInPage';
import TravelTipsPage from './pages/TravelTipsPage/TravelTipsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MainPage from './pages/MainPage/MainPage';
import CreateGuidePage from './pages/CreateGuidePage/CreateGuidePage';

function App() {
  return (
    <>
      <ScrollToTopOrHash />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/cities" element={<CitiesPage />} />
        <Route path="/cities/:id" element={<CityPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/travel-tips" element={<TravelTipsPage />} />
        <Route path="/create-guide" element={<CreateGuidePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

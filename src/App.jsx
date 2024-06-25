import { Routes, Route } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import CitiesPage from './pages/CitiesPage/CitiesPage';
import SingleCityPage from './pages/SingleCityPage/SingleCityPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import SignInPage from './pages/SignInPage/SignInPage';
import TravelTipsPage from './pages/TravelTipsPage/TravelTipsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/cities-guides" element={<CitiesPage />} />
        <Route path="/cities-guides/:id" element={<SingleCityPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/travel-tips" element={<TravelTipsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

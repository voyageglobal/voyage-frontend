import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import { memo } from 'react';

const Page = ({ children, title, titlePrefix = 'Voyage', description }) => {
  const pageTitle =
    title && title !== titlePrefix ? `${titlePrefix} | ${title}` : titlePrefix;
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <meta name="description" content={description} />
        <title>{pageTitle}</title>
      </Helmet>
      <header>
        <NavBar />
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default memo(Page);

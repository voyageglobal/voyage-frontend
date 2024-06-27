import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Page = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
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

export default Page;

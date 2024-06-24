import LogoButton from '../../components/common/LogoButton/LogoButton';

const Footer = () => {
  return (
    <section className="min-h-20">
      <div className="container mx-auto flex items-center justify-between pb-4 pt-7">
        <LogoButton />
        <p className="w-48 text-right font-fourth">
          &copy; {new Date().getFullYear()} VOYAGE.COM ALL RIGHTS RESERVED
        </p>
      </div>
    </section>
  );
};

export default Footer;

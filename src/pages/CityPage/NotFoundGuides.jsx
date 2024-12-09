import NotFoundIMG from '../../assets/img/citiesPage/NotFoundIMG.svg';

const GuidesNotFoundSection = () => {
  return (
    <section className="min-h-96 p-14">
      <div className="container mx-auto flex h-96 flex-col items-center justify-around">
        <NotFoundIMG />
        <h3 className="font-third text-xl">Sorry, no guides found</h3>
        <p className="w-3/5 text-center font-primary text-xl/6">
          Unfortunately, there are no guides available for the selected
          categories or location. <br /> But don&apos;t worry! <br /> You can
          always be the first to share your unique insights and help other
          travelers discover amazing places.
        </p>
      </div>
    </section>
  );
};

export default GuidesNotFoundSection;

import aboutUs from '../../assets/img/AboutUsPage/AboutUs.png';

const AboutUsSection = () => {
  return (
    <section className="min-h-36">
      <div className="container mx-auto flex justify-between pt-12">
        <div className="flex max-w-2xl flex-col justify-between">
          <h2 className="font-third text-2rem font-normal">About Us</h2>
          <p className="font-primary text-xl/6">
            We are an independent community of travelers and city experts.
            <br />
            We believe that the best guides are those created by travelers
            themselves, people who are truly passionate about cities and know
            every corner of them. Here you will find unique tips, hidden gems,
            and unforgettable places that are not described in standard
            guidebooks.
            <br />
            We invite you to share your knowledge and experience with us and
            other travelers, to create true masterpieces of guides together and
            to share inspiration.
          </p>
        </div>
        <img
          className="block h-fit pt-8"
          src={aboutUs}
          alt="The introductory picture of travelers"
        />
      </div>
    </section>
  );
};

export default AboutUsSection;

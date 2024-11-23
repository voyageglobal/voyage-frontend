import PartOfUs from '../../assets/img/AboutUsPage/PartOfUs.png';
import CreateGuideButton from '../../components/common/CreateGuideButton/CreateGuideButton';

const PartOfUsSection = () => {
  return (
    <section
      className="mt-5 min-h-[32.75rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${PartOfUs})` }}
    >
      <div className="container mx-auto flex h-96 flex-col items-center justify-between pt-36 text-light-color">
        <h2 className="font-third text-xl">Do you want to be a part of us?</h2>
        <p className="w-11/12 text-center font-primary text-xl/6">
          Contribute to our community by adding your own guide! Share insights
          about your favorite spots in the city or country. <br /> Upload
          descriptions of interesting places, landmarks, and photo shoot ideas.{' '}
          <br />
          It&apos;s easy – just a few minutes, your location, and a photo of the
          place, and you&apos;re done! <br /> Make our database as unique as
          your adventures. <br /> Let&apos;s explore together!
        </p>
        <CreateGuideButton />
      </div>
    </section>
  );
};

export default PartOfUsSection;

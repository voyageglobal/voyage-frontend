import ourStory from '../../assets/img/AboutUsPage/OurStory.png';

const OurStorySection = () => {
  return (
    <section className="min-h-[40rem]">
      <div className="container mx-auto flex justify-between pt-12">
        <div className="flex max-w-2xl flex-col justify-between">
          <h2 className="font-third text-2rem font-normal">Our story</h2>
          <p className="mt-7 font-primary text-xl/6">
            Once upon a time, a group of passionate travelers who always shared
            their adventures and travel tips with friends and family realized
            they had a unique knowledge about various cities that could be
            helpful to other travelers. Over lunch, they brainstormed how to
            better share this information with the world. The idea of creating a
            website with city guides and a blog with tips quickly emerged. They
            wanted to create an online platform where anyone who visited
            different cities could leave reviews, share tips, and create their
            own guides. <br /> <br /> With enthusiasm and energy, they began
            their work. They decided the website should be intuitive and easy to
            use for all users, regardless of their level of travel or internet
            experience. They designed a layout that was simple to navigate yet
            colorful and attractive. <br /> <br /> They started gathering
            information about different cities from around the world. They wrote
            guides based on their own experiences and welcomed contributions
            from other travelers. As a result, the website became filled with a
            wealth of unique and interesting content. <br /> <br /> The website
            was launched and quickly gained popularity. Travelers from all over
            the world began using it to plan their trips, get advice, and share
            their stories. Over time, the website became a thriving community of
            travelers, where everyone could find something useful and share
            their experiences.
          </p>
        </div>
        <img
          className="my-auto block h-fit"
          src={ourStory}
          alt="The introductory picture of travelers"
        />
      </div>
    </section>
  );
};

export default OurStorySection;

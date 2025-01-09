const CityFetchError = () => {
  return (
    <section className="min-h-28">
      <div className="container mx-auto pt-14">
        <div className="flex justify-between text-dark-color">
          <p className="font-fourth text-xl">
            Something went wrong while fetching the city details. Please try
            again later.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CityFetchError;

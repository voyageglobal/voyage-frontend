const CityFetchError = ({ message }) => {
  return (
    <section className="min-h-28">
      <div className="container mx-auto pt-14">
        <div className="font-fourth text-xl text-dark-color">
          <h3>Error loading guide data:</h3>
          <p>
            {message || 'An unexpected error occurred. Please try again later.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CityFetchError;

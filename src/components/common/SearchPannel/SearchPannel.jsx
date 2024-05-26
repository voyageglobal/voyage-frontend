import './searchPannel.scss';

const SearchPannel = () => {
  return (
    <form className="search-container" action="/search" method="GET">
      <input
        className="search-input"
        type="search"
        name="query"
        placeholder="Where are we going today?"
      />
      <button
        className="search-button"
        type="submit"
        aria-label="Open search results"
      >
        <img src="../../../src/assets/img/search-icon.png" alt="Search icon" />
      </button>
    </form>
  );
};

export default SearchPannel;

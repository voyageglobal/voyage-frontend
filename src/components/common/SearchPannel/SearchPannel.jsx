import './searchPannel.scss';

const SearchPannel = () => {
  return (
    <form className="search-container" action="/search" method="GET">
      <button type="submit" className="search-button">
        <img src="../../../src/assets/img/search-icon.png" alt="Search icon" />
      </button>
      <input
        type="text"
        className="search-input"
        name="query"
        placeholder="Where are we going today?"
      />
    </form>
  );
};

export default SearchPannel;

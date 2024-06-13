import './searchPanel.scss';
import SearchIcon from '../../../assets/img/searchIcon.svg';

const SearchPanel = () => {
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
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchPanel;

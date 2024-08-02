import SearchIcon from '../../../assets/img/searchIcon.svg';
import { useSearch } from '../../../context/SearchContext';

const SearchPanelSecondary = () => {
  const { setSearchQuery } = useSearch();

  const handleSearch = event => {
    event.preventDefault();
    const query = event.target.query.value;
    setSearchQuery(query);
  };

  return (
    <form
      className="flex h-12 items-center rounded-10px bg-light-color pl-8"
      onSubmit={handleSearch}
    >
      <input
        className="flex-grow bg-transparent font-fourth text-xl/5 italic text-dark-color placeholder-dark-color outline-none"
        type="search"
        name="query"
        placeholder="India | Deli"
        aria-label="Search input"
      />
      <button
        className="flex h-full w-28 items-center justify-center rounded-r-10px bg-dark-color/30 pl-4 pr-5"
        type="submit"
        aria-label="Open search results"
      >
        <SearchIcon className="mr-3" aria-hidden="true" />
        <span className="font-primary text-xl">Search</span>
      </button>
    </form>
  );
};

export default SearchPanelSecondary;

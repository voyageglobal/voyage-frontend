import SearchIcon from '../../../assets/img/searchIcon.svg';

const SearchPanelPrimary = () => {
  return (
    <form
      className="flex w-96 items-center rounded-10px bg-light-color p-4"
      action="/search"
      method="GET"
    >
      <input
        className="flex-grow bg-transparent font-primary text-lg/3 text-dark-color placeholder-dark-color outline-none"
        type="search"
        name="query"
        placeholder="Where are we going today?"
        aria-label="Search for guides by city or country name"
      />
      <button
        className="flex h-4 w-4 items-center justify-center"
        type="submit"
        aria-label="Submit search for travel guides and open search results"
      >
        <SearchIcon aria-hidden="true" />
      </button>
    </form>
  );
};

export default SearchPanelPrimary;

import SearchIcon from '../../../assets/img/searchIcon.svg';

const SearchPanel = () => {
  return (
    <form
      className="rounded-10px flex w-96 items-center bg-light-color p-4"
      action="/search"
      method="GET"
    >
      <input
        className="text-base/2 flex-grow bg-transparent font-primary text-dark-color placeholder-dark-color outline-none"
        type="search"
        name="query"
        placeholder="Where are we going today?"
      />
      <button
        className="flex h-4 w-4 items-center justify-center"
        type="submit"
        aria-label="Open search results"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchPanel;

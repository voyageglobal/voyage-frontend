import { memo } from 'react';
import SearchIcon from '../../../assets/img/searchIcon.svg';

const SearchPanelTravelTips = () => {
  const handleSearch = event => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex h-10 w-[23rem] rounded-10px bg-light-color pl-4 drop-shadow-lg"
    >
      <input
        className="flex-grow bg-transparent font-fourth text-lg/5 italic text-dark-color placeholder-dark-color outline-none"
        type="search"
        name="query"
        placeholder="Search by keywords"
        aria-label="Search for travel tips by keywords"
      />
      <button
        className="flex w-14 items-center justify-center rounded-r-10px bg-dark-color/30 px-4"
        type="submit"
        aria-label="Submit search for travel tips and open search results"
      >
        <SearchIcon aria-hidden="true" />
      </button>
    </form>
  );
};

export default memo(SearchPanelTravelTips);

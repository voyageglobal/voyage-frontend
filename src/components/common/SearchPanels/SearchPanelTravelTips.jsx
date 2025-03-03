import { memo } from 'react';
import Search from 'lucide-react/icons/search';

const SearchPanelTravelTips = () => {
  const handleSearch = e => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex h-10 w-[23rem] rounded-10px bg-light-color pl-4 drop-shadow-lg"
    >
      <input
        className="flex-grow bg-transparent font-fourth text-lg/5 italic text-dark-color placeholder-dark-color outline-none"
        type="search"
        placeholder="Search by keywords"
        aria-label="Search for travel tips by keywords"
      />
      <button
        className="flex w-14 items-center justify-center rounded-r-10px bg-dark-color/30 px-4"
        type="submit"
        aria-label="Submit search for travel tips and open search results"
      >
        <Search
          strokeWidth={2}
          className="text-dark-color/80 hover:text-light-color"
          aria-hidden="true"
        />
      </button>
    </form>
  );
};

export default memo(SearchPanelTravelTips);

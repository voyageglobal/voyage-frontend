import { useState, useEffect } from 'react';
import { useCitySearchQuery } from '../../../hooks/useCitySearchQuery';
import { Search } from 'lucide-react';

const SearchPanelSecondary = () => {
  const { citySearchQuery, updateCitySearchQuery } = useCitySearchQuery();
  const [queryInput, setQueryInput] = useState(citySearchQuery || '');

  useEffect(() => {
    if (citySearchQuery !== undefined) {
      setQueryInput(citySearchQuery);
    }
  }, [citySearchQuery]);

  const handleSearch = e => {
    e.preventDefault();
    updateCitySearchQuery(queryInput);
  };

  const handleInputChange = e => {
    setQueryInput(e.target.value);
  };

  return (
    <form
      className="flex h-12 items-center rounded-10px bg-light-color pl-8"
      onSubmit={handleSearch}
    >
      <input
        className="flex-grow bg-transparent font-fourth text-xl/5 italic text-dark-color placeholder-dark-color/40 outline-none"
        type="search"
        placeholder="India | Delhi"
        aria-label="Search for guides by city or country name"
        value={queryInput}
        onChange={handleInputChange}
      />
      <button
        className="flex h-full w-28 items-center justify-center rounded-r-10px bg-dark-color/30 pl-3 pr-4 text-dark-color/80 hover:text-light-color"
        type="submit"
        aria-label="Submit search for travel guides and open search results"
      >
        <Search
          size="28px"
          className="mr-3"
          aria-hidden="true"
          strokeWidth={2}
        />
        <span className="font-primary text-xl">Search</span>
      </button>
    </form>
  );
};

export default SearchPanelSecondary;

import { useState, useEffect } from 'react';
import { useCitySearchQuery } from '../../../hooks/useCitySearchQuery';
import { useNavigateToRoute } from '../../../hooks/useNavigateToRoute';
import { Search } from 'lucide-react';

const SearchPanelPrimary = () => {
  const { citySearchQuery, updateCitySearchQuery } = useCitySearchQuery();
  const { navigateToRoute } = useNavigateToRoute();
  const [queryInput, setQueryInput] = useState(citySearchQuery || '');

  useEffect(() => {
    if (citySearchQuery !== undefined) {
      setQueryInput(citySearchQuery);
    }
  }, [citySearchQuery]);

  const handleSubmit = e => {
    e.preventDefault();

    updateCitySearchQuery(queryInput);

    navigateToRoute('/cities', queryInput);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-96 items-center rounded-10px bg-light-color p-4"
    >
      <input
        className="flex-grow bg-transparent font-primary text-lg/3 text-dark-color placeholder-dark-color/40 outline-none"
        type="search"
        value={queryInput}
        onChange={e => setQueryInput(e.target.value)}
        placeholder="Where are we going today?"
        aria-label="Search for guides by city or country name"
      />
      <button
        className="flex h-5 w-5 items-center justify-center"
        type="submit"
        aria-label="Submit search for travel guides and open search results"
      >
        <Search
          strokeWidth={2}
          className="text-dark-color/80 hover:text-orange-color"
          aria-hidden="true"
        />
      </button>
    </form>
  );
};

export default SearchPanelPrimary;

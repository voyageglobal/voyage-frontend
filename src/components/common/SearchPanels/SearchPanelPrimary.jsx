import { memo } from 'react';
import { useSearchQuery } from '../../../hooks/useSearchQuery';
import SearchIcon from '../../../assets/img/searchIcon.svg';

const SearchPanelPrimary = () => {
  const { query, setQuery, updateQuery } = useSearchQuery();

  const handleSubmit = event => {
    event.preventDefault();
    updateQuery(query, '/cities');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-96 items-center rounded-10px bg-light-color p-4"
    >
      <input
        className="flex-grow bg-transparent font-primary text-lg/3 text-dark-color placeholder-dark-color/40 outline-none"
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
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

export default memo(SearchPanelPrimary);

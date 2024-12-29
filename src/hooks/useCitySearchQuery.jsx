import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useSearchQuery = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get('query') || '';
    setQuery(queryParam);
  }, [searchParams]);

  const updateQuery = useCallback(
    (newQuery, route = '') => {
      const trimmedQuery = newQuery.trim();
      if (trimmedQuery) {
        searchParams.set('query', trimmedQuery);
        navigate(`${route}?${searchParams.toString()}`);
      } else {
        searchParams.delete('query');
        navigate(route || '?');
      }
    },
    [navigate, searchParams],
  );

  return { query, setQuery, updateQuery };
};

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigateToRoute = () => {
  const navigate = useNavigate();

  const navigateToRoute = useCallback(
    (route, query) => {
      navigate({
        pathname: route,
        search: `?query=${query}`,
      });
    },
    [navigate],
  );

  return { navigateToRoute };
};

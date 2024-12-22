import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../services/CategoriesService';
import NoCategory from '../assets/img/CategoriesCards/NoCategory.png';

const ALL_CATEGORIES_QUERY_KEY = 'categories';

export const NO_CATEGORY_BUTTON = {
  key: 'NO_CATEGORY',
  name: 'Clear Categories',
  imageUrl: NoCategory,
  iconName: 'circle-off',
};

const useAllCategories = () => {
  return useQuery({
    queryKey: [ALL_CATEGORIES_QUERY_KEY],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 5,
    select: categoriesData => [...categoriesData, NO_CATEGORY_BUTTON],
  });
};

export default useAllCategories;

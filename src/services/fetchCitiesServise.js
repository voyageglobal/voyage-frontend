import instance from '../utilities/axios/axios';

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_SORT_ORDER = 'POPULARITY_DESC';

async function fetchCities({
  page = DEFAULT_PAGE,
  pageSize = DEFAULT_PAGE_SIZE,
  sortOrder = DEFAULT_SORT_ORDER,
  onlyWithGuides = false,
} = {}) {
  const params = {
    page,
    pageSize,
    sortOrder,
    onlyWithGuides,
  };

  try {
    const response = await instance.get('/cities', { params });
    const items = response?.data?.data?.items ?? [];

    if (items.length > 0) {
      return items;
    } else {
      throw new Error('Unable to retrieve popular cities');
    }
  } catch (error) {
    console.error('Error fetching popular cities:', error);
    throw error;
  }
}

export default fetchCities;

import instance from '../utilities/axios/axios';

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_SORT_ORDER = 'POPULARITY_DESC';
const DEFAULT_ENDPOINT = '/cities';

async function fetchPopularCities({
  endpoint = DEFAULT_ENDPOINT,
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
    const response = await instance.get(endpoint, { params });
    if (response.data && response.data[0].items) {
      return response.data[0].items;
    } else {
      throw new Error('No data found');
    }
  } catch (error) {
    console.error('Error fetching popular cities:', error);
    throw error;
  }
}

export default fetchPopularCities;

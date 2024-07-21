import instance from '../utilities/axios/axios';

export const FETCH_SETTINGS = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 10,
  SORT: {
    POPULARITY_ASC: 'POPULARITY_ASC',
    POPULARITY_DESC: 'POPULARITY_DESC',
    NAME_ASC: 'NAME_ASC',
    NAME_DESC: 'NAME_DESC',
  },
  ONLY_WITH_GUIDES: {
    TRUE: true,
    FALSE: false,
  },
};

async function fetchCities({
  page = FETCH_SETTINGS.DEFAULT_PAGE,
  pageSize = FETCH_SETTINGS.DEFAULT_PAGE_SIZE,
  sortOrder = FETCH_SETTINGS.SORT.POPULARITY_DESC,
  onlyWithGuides = FETCH_SETTINGS.ONLY_WITH_GUIDES.FALSE,
} = {}) {
  const params = {
    page,
    pageSize,
    sortOrder,
    onlyWithGuides,
  };

  try {
    const response = await instance.get('/cities', { params });
    const data = response?.data?.data;
    const items = data.items ?? [];
    const hasMore = data.hasMore ?? false;
    const total = data.total ?? 0;
    console.log(data);

    if (items.length > 0) {
      return { items, hasMore, total };
    } else {
      throw new Error('Unable to retrieve popular cities');
    }
  } catch (error) {
    console.error('Error fetching popular cities:', error);
    throw error;
  }
}

export default fetchCities;

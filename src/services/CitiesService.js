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
  searchString = '',
  onlyWithGuides = FETCH_SETTINGS.ONLY_WITH_GUIDES.FALSE,
} = {}) {
  const params = {
    page,
    pageSize,
    sortOrder,
    ...(searchString && { searchString }),
    onlyWithGuides,
  };

  try {
    const response = await instance.get('/cities', { params });

    if (response?.data?.errors) {
      throw new Error(
        'Error fetching data: ' + JSON.stringify(response.data.errors),
      );
    }

    const {
      items = [],
      hasMore = false,
      total = 0,
    } = response?.data?.data ?? {};

    return { items, hasMore, total };
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
}

export default fetchCities;

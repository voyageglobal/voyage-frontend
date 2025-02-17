import instance from '../utilities/axios/axios';

export const FETCH_SETTINGS = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 10,
};

async function fetchCountries({
  page = FETCH_SETTINGS.DEFAULT_PAGE,
  pageSize = FETCH_SETTINGS.DEFAULT_PAGE_SIZE,
} = {}) {
  const params = {
    page,
    pageSize,
  };

  try {
    const response = await instance.get('/countries', { params });

    if (response?.data?.errors) {
      throw new Error(
        'Error fetching data: ' + JSON.stringify(response.data.errors),
      );
    }

    /* const {
      items = [],
      hasMore = false,
      total = 0,
    } = response?.data?.data ?? {}; */
    const items = response?.data?.data ?? [];
    const hasMore = false;
    const total = items.length;
    return { items, hasMore, total };
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
}

export default fetchCountries;

import instance from '../utilities/axios/axios';

export const GUIDE_FETCH_SETTINGS = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 10,
  ORDER_BY: {
    NAME: 'name',
    POPULARITY: 'popularity',
  },
  ORDER_DIRECTION: {
    ASC: 'asc',
    DESC: 'desc',
  },
};

async function fetchGuides({
  page = GUIDE_FETCH_SETTINGS.DEFAULT_PAGE,
  pageSize = GUIDE_FETCH_SETTINGS.DEFAULT_PAGE_SIZE,
  orderBy = GUIDE_FETCH_SETTINGS.ORDER_BY.NAME,
  orderDirection = GUIDE_FETCH_SETTINGS.ORDER_DIRECTION.ASC,
  searchString = '',
  city,
} = {}) {
  const params = {
    page,
    pageSize,
    orderBy,
    orderDirection,
    ...(searchString && { searchString }),
    ...(city && { city }),
  };

  try {
    const response = await instance.get('/guides', { params });

    if (response?.data?.errors) {
      throw new Error(
        'Error fetching guides: ' + JSON.stringify(response.data.errors),
      );
    }

    const {
      items = [],
      hasMore = false,
      total = 0,
    } = response?.data?.data ?? {};

    return { items, hasMore, total };
  } catch (error) {
    console.error('Error fetching guides:', error);
    throw error;
  }
}

export default fetchGuides;

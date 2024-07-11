import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const CITIES_ENDPOINT = import.meta.env.VITE_CITIES_ENDPOINT;
const DEFAULT_PAGE = import.meta.env.VITE_DEFAULT_PAGE;
const DEFAULT_PAGE_SIZE = import.meta.env.VITE_DEFAULT_PAGE_SIZE;
const DEFAULT_SORT_ORDER = import.meta.env.VITE_DEFAULT_SORT_ORDER;

async function fetchPopularCities({
  page = DEFAULT_PAGE,
  pageSize = DEFAULT_PAGE_SIZE,
  sortOrder = DEFAULT_SORT_ORDER,
} = {}) {
  const url = `${BASE_URL}${CITIES_ENDPOINT}`;
  const params = {
    page,
    pageSize,
    sortOrder,
  };

  const { data } = await axios.get(url, { params });

  return data.items;
}

export default fetchPopularCities;

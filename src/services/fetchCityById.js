import instance from '../utilities/axios/axios';

async function fetchCityById(id) {
  try {
    const response = await instance.get(`/cities/${id}`);

    if (response?.data?.errors) {
      throw new Error(
        'Error fetching city data: ' + JSON.stringify(response.data.errors),
      );
    }

    return response?.data?.data ?? null;
  } catch (error) {
    console.error('Error fetching city:', error);
    throw error;
  }
}

export default fetchCityById;

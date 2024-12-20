import instance from '../utilities/axios/axios';

async function fetchGuideById(id) {
  try {
    const response = await instance.get(`/guides/${id}`);

    if (response?.data?.errors) {
      throw new Error(
        'Error fetching guide data: ' + JSON.stringify(response.data.errors),
      );
    }

    return response?.data?.data ?? null;
  } catch (error) {
    console.error('Error fetching guide:', error);
    throw error;
  }
}

export default fetchGuideById;

import instance from '../utilities/axios/axios';

export async function getStatistics() {
  try {
    const response = await instance.get('/stats/total');

    if (response?.data?.errors) {
      throw new Error(
        `Error getting stats: ${JSON.stringify(response.data.errors)}`,
      );
    }

    return response?.data?.data ?? null;
  } catch (error) {
    if (instance.isAxiosError(error)) {
      console.error('Axios error while fetching statistics:', error.response);
    } else {
      console.error('Unexpected error while fetching statistics:', error);
    }
    throw error;
  }
}

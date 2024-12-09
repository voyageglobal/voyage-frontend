import instance from '../utilities/axios/axios';

export const fetchCategories = async () => {
  try {
    const response = await instance.get('/guide-categories');
    return response.data.data;
  } catch (error) {
    throw new Error('Error fetching categories: ' + error.message);
  }
};

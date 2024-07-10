import axios from 'axios';

async function fetchPopularCities() {
  const { data } = await axios.get(
    'http://ec2-16-16-115-191.eu-north-1.compute.amazonaws.com:4000/cities?page=1&pageSize=10&sortOrder=POPULARITY_DESC',
  );

  return data.items;
}

export default fetchPopularCities;

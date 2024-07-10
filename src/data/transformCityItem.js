import Stub from '../assets/img/cities/Stub.png';

const transformCityItem = city => {
  return {
    id: city.id,
    name: city.name,
    country: city.country.name,
    imageUrl: city.images[0]?.url || Stub,
  };
};

export default transformCityItem;

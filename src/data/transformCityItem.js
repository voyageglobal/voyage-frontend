import Stub from '../assets/img/Stub.png';

const transformCityItem = city => {
  return {
    id: city.id,
    name: city.name,
    description: city.description || 'No description available',
    country: {
      id: city.country?.id || null,
      name: city.country?.name || 'Unknown Country',
      flag: city.country?.flag || '',
    },
    imageUrl: city.images[0]?.url || Stub,
  };
};

export default transformCityItem;

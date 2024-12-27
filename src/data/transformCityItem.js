import Stub from '../assets/img/Stub.png';

const transformCityItem = city => {
  return {
    id: city.id,
    name: city.name,
    description:
      city.description ||
      'We don’t have a description for this destination yet, but who needs one when adventure awaits? Pack your bags, bring your curiosity, and become the pioneer explorer of this hidden gem. Don’t forget to share your discoveries—your tips might just write the next guide!',
    country: {
      id: city.country?.id || null,
      name: city.country?.name,
      flag: city.country?.flag || '',
    },
    imageUrl: city.images[0]?.url || Stub,
  };
};

export default transformCityItem;

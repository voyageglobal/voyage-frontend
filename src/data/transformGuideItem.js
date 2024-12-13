import Stub from '../assets/img/Stub.png';

const transformGuideItem = guide => {
  return {
    id: guide.id,
    name: guide.name,
    description: guide.text,
    startDate: guide.visitedDateStart,
    endDate: guide.visitedDateEnd,
    categories: guide.categories,
    cities: guide.cities.map(city => ({ id: city.id, name: city.name })),
    country: {
      id: guide.countries[0]?.id || 'Unknown Country ID',
      name: guide.countries[0]?.name || 'Unknown Country',
      flag: guide.countries[0]?.flag || '',
    },
    flag: guide.countries[0]?.flag || '',
    imageUrl: guide.primaryImages[0]?.url || Stub,
  };
};

export default transformGuideItem;

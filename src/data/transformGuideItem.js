import GuideCardStub from '../assets/img/cityPage/GuideCardStub.jpg';

const transformGuideItem = guide => {
  return {
    id: guide.id,
    name: guide.name,
    article: guide.text,
    startDate: guide.visitedDateStart,
    endDate: guide.visitedDateEnd,
    categories: guide.categories,
    cities: guide.cities.map(city => ({ id: city.id, name: city.name })),
    country: {
      id: guide.countries[0]?.id || null,
      name: guide.countries[0]?.name || 'Unknown Country',
      flag: guide.countries[0]?.flag || '',
    },
    flag: guide.countries[0]?.flag || '',
    imagePrimary: guide.primaryImages[0]?.url || GuideCardStub,
    imagesContent: guide.contentImages?.map(img => img.url) || [],
  };
};

export default transformGuideItem;

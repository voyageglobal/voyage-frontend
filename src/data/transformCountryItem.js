const transformCountryItem = country => {
  return {
    id: country.id,
    name: country.name,
    description:
      country.description ||
      'We don’t have a description for this destination yet, but who needs one when adventure awaits? Pack your bags, bring your curiosity, and become the pioneer explorer of this hidden gem. Don’t forget to share your discoveries—your tips might just write the next guide!',
    imageUrl: country.images?.[0]?.url,
  };
};

export default transformCountryItem;

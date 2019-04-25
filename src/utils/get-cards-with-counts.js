const getCardsWithCounts = ({ cards, counts }) => {
  const countsMap = counts.reduce ((map, countRecord) => ({
    ...map,
    [countRecord.name]: countRecord.count,
  }), {});

  return cards.map ((card) => {
    if (countsMap[card.internalName] === undefined) {
      return {
        ...card,
        mentions: 0,
      };
    }

    return {
      ...card,
      mentions: parseInt (countsMap[card.internalName], 10),
    };
  }).sort ((a, b) => {
    if (a.mentions < b.mentions) {
      return 1;
    }

    if (a.mentions > b.mentions) {
      return -1;
    }

    return 0;
  });
};

export default getCardsWithCounts;

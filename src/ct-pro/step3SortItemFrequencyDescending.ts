let sortedItemFrequencyDescending = [];

const step3SortItemFrequencyDescending = (data: any) => {
  sortedItemFrequencyDescending = data.sort((itemOne: any, itemTwo: any) =>
    itemOne.frequency > itemTwo.frequency ? -1 : 1,
  );
  return sortedItemFrequencyDescending;
};

export default step3SortItemFrequencyDescending;

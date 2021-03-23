const step7SortingIndexedTransactionsData = (indexedTransactionsData: any) => {
  indexedTransactionsData.map((singleIndexedTransationsData: number[]) => {
    singleIndexedTransationsData.sort((itemOne: number, itemTwo: number) =>
      itemOne > itemTwo ? 1 : -1,
    );
  });
  return indexedTransactionsData;
};

export default step7SortingIndexedTransactionsData;

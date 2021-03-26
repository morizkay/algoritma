let tempData : any;

const step7SortingIndexedTransactionsData = (indexedTransactionsData: any) => {
  tempData = indexedTransactionsData;
  tempData.map((singleIndexedTransationsData: number[]) => singleIndexedTransationsData.sort((itemOne: number, itemTwo: number) => (itemOne > itemTwo ? 1 : -1)));
  return tempData;
};

export default step7SortingIndexedTransactionsData;

const step8ReversingIndexedTransactionsData = (
  indexedTransactionsData: any,
) => {
  const reversedIndexedTransationsData: Array<any> = [];

  for (
    let indexOfIndexedTransactionsData = 0;
    indexOfIndexedTransactionsData < indexedTransactionsData.length;
    indexOfIndexedTransactionsData++
  ) {
    reversedIndexedTransationsData.push(
      indexedTransactionsData[
        indexOfIndexedTransactionsData
      ].sort((itemOne: number, itemTwo: number) =>
        itemOne > itemTwo ? -1 : 1,
      ),
    );
  }
  return reversedIndexedTransationsData;
};

export default step8ReversingIndexedTransactionsData;

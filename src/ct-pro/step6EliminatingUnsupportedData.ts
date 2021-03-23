const step6EliminatingUnsupportedData = (indexedTransactionsData: any) => {
  for (
    let firstIndexOfItemsData = 0;
    firstIndexOfItemsData < indexedTransactionsData.length;
    firstIndexOfItemsData++
  ) {
    for (
      let secondIndexOfItemsData = 0;
      secondIndexOfItemsData <
      indexedTransactionsData[firstIndexOfItemsData].length;
      secondIndexOfItemsData++
    ) {
      if (
        typeof indexedTransactionsData[firstIndexOfItemsData][
          secondIndexOfItemsData
        ] !== 'number'
      ) {
        indexedTransactionsData[firstIndexOfItemsData].splice(
          secondIndexOfItemsData,
          1,
        );
      }
    }
  }

  return indexedTransactionsData;
};

export default step6EliminatingUnsupportedData;

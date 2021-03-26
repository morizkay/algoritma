const step6EliminatingUnsupportedData = (
  indexedTransactionsData: string | any[],
) => {
  for (
    let firstIndexOfItemsData = 0;
    firstIndexOfItemsData < indexedTransactionsData.length;
    firstIndexOfItemsData += 1
  ) {
    for (
      let secondIndexOfItemsData = 0;
      secondIndexOfItemsData <
      indexedTransactionsData[firstIndexOfItemsData].length;
      secondIndexOfItemsData += 1
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

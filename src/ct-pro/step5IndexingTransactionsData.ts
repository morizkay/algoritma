let indexedTransactionsData: Array<any> = [];

const step5IndexingTransactionsData = (
  itemsData: any,
  transactionsData: any,
) => {
  indexedTransactionsData = transactionsData;
  for (
    let indexOfItemsData = 0;
    indexOfItemsData < itemsData.length;
    indexOfItemsData += 1
  ) {
    for (
      let indexOfFirstArrayOfItemsData = 0;
      indexOfFirstArrayOfItemsData < indexedTransactionsData.length;
      indexOfFirstArrayOfItemsData += 1
    ) {
      for (
        let indexOfSecondaryArrayOfItemsData = 0;
        indexOfSecondaryArrayOfItemsData <
        indexedTransactionsData[indexOfFirstArrayOfItemsData].length;
        indexOfSecondaryArrayOfItemsData += 1
      ) {
        if (
          itemsData[indexOfItemsData]._id ===
          indexedTransactionsData[indexOfFirstArrayOfItemsData][
            indexOfSecondaryArrayOfItemsData
          ]
        ) {
          indexedTransactionsData[indexOfFirstArrayOfItemsData][
            indexOfSecondaryArrayOfItemsData
          ] = itemsData[indexOfItemsData].index;
        }
      }
    }
  }

  return indexedTransactionsData;
};

export default step5IndexingTransactionsData;

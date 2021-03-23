const step9SetLocalItemAsociationBasedOnLastIndex = (
  indexedTransactionsData: any,
  itemsDataLength: number,
) => {
  const localItemAsociationBasedOnLastIndex: Array<any> = [];
  for (
    let indexOfItemsDataLength = 0;
    indexOfItemsDataLength < itemsDataLength;
    indexOfItemsDataLength++
  ) {
    localItemAsociationBasedOnLastIndex.push({
      rootOfLocalIndex: indexOfItemsDataLength + 1,
    });
    for (
      let indexOfFirstArrayOfIndexedTransactionsData = 0;
      indexOfFirstArrayOfIndexedTransactionsData <
      indexedTransactionsData.length;
      indexOfFirstArrayOfIndexedTransactionsData++
    ) {
      for (
        let indexOfSecondArrayOfIndexedTransactionsData = 0;
        indexOfSecondArrayOfIndexedTransactionsData <
        indexedTransactionsData[indexOfFirstArrayOfIndexedTransactionsData]
          .length;
        indexOfSecondArrayOfIndexedTransactionsData++
      ) {
        if (
          localItemAsociationBasedOnLastIndex[indexOfItemsDataLength]
            .rootOfLocalIndex ===
          indexedTransactionsData[indexOfFirstArrayOfIndexedTransactionsData][0]
        ) {
          console.log('Ketemu');
        }
      }
    }
  }

  return localItemAsociationBasedOnLastIndex;
};

export default step9SetLocalItemAsociationBasedOnLastIndex;

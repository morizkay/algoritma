const step9SetLocalItemAsociationBasedOnLastIndex = (
  indexedTransactionsData: any,
  itemsDataLength: number,
) => {
  const localItemAsociationBasedOnLastIndex: Array<any> = [];
  for (
    let indexOfItemsDataLength = 0;
    indexOfItemsDataLength < itemsDataLength;
    indexOfItemsDataLength += 1
  ) {
    localItemAsociationBasedOnLastIndex.push({
      value: indexOfItemsDataLength + 1,
      frequency: 0,
      children: {},
    });
  }

  for (
    let indexOfLocalItemAsociationBasedOnLastIndex = 0;
    indexOfLocalItemAsociationBasedOnLastIndex
    < localItemAsociationBasedOnLastIndex.length;
    indexOfLocalItemAsociationBasedOnLastIndex += 1
  ) {
    for (
      let indexOfFirstArrayOfIndexedTransactionsData = 0;
      indexOfFirstArrayOfIndexedTransactionsData
      < indexedTransactionsData.length;
      indexOfFirstArrayOfIndexedTransactionsData += 1
    ) {
      if (
        localItemAsociationBasedOnLastIndex[
          indexOfLocalItemAsociationBasedOnLastIndex
        ].value
        === indexedTransactionsData[indexOfFirstArrayOfIndexedTransactionsData][0]
      ) {
        console.log(
          localItemAsociationBasedOnLastIndex[
            indexOfLocalItemAsociationBasedOnLastIndex
          ].value,
        );
      }
    }
  }

  return localItemAsociationBasedOnLastIndex;
};

export default step9SetLocalItemAsociationBasedOnLastIndex;

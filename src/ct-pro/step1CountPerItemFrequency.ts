type itemsFrequenciesType = {
  index?: any;
  _id: any;
  frequent: any;
};

const itemsFrequency: Array<itemsFrequenciesType> = [];

const step1CountPerItemFrequency = (transactionsData: any) => {
  for (
    let indexOfFirstArrayOfTransactionsData = 0;
    indexOfFirstArrayOfTransactionsData < transactionsData.length;
    indexOfFirstArrayOfTransactionsData++
  ) {
    for (
      let indexOfSecondaryArrayOfTransactionsData = 0;
      indexOfSecondaryArrayOfTransactionsData <
      transactionsData[indexOfFirstArrayOfTransactionsData].length;
      indexOfSecondaryArrayOfTransactionsData++
    ) {
      if (itemsFrequency.length === 0) {
        itemsFrequency.push({
          _id:
            transactionsData[indexOfFirstArrayOfTransactionsData][
              indexOfSecondaryArrayOfTransactionsData
            ],
          frequent: 1,
        });
      } else {
        let found: boolean = false;
        for (
          let indexOfItemsFrequency = 0;
          indexOfItemsFrequency < itemsFrequency.length && !found;
          indexOfItemsFrequency++
        ) {
          if (
            itemsFrequency[indexOfItemsFrequency]._id ===
            transactionsData[indexOfFirstArrayOfTransactionsData][
              indexOfSecondaryArrayOfTransactionsData
            ]
          ) {
            itemsFrequency[indexOfItemsFrequency].frequent++;
            found = true;
          }
        }
        if (found === false) {
          itemsFrequency.push({
            _id:
              transactionsData[indexOfFirstArrayOfTransactionsData][
                indexOfSecondaryArrayOfTransactionsData
              ],
            frequent: 1,
          });
        }
      }
    }
  }
  return itemsFrequency;
};

export default step1CountPerItemFrequency;

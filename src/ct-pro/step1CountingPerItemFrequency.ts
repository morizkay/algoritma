type itemsFrequenciesType = {
  index?: any;
  _id: any;
  frequency: any;
};

const itemsFrequency: Array<itemsFrequenciesType> = [];

const step1CountingPerItemFrequency = (transactionsData: any) => {
  for (
    let indexOfFirstArrayOfTransactionsData = 0;
    indexOfFirstArrayOfTransactionsData < transactionsData.length;
    indexOfFirstArrayOfTransactionsData += 1
  ) {
    for (
      let indexOfSecondaryArrayOfTransactionsData = 0;
      indexOfSecondaryArrayOfTransactionsData
      < transactionsData[indexOfFirstArrayOfTransactionsData].length;
      indexOfSecondaryArrayOfTransactionsData += 1
    ) {
      if (itemsFrequency.length === 0) {
        itemsFrequency.push({
          _id:
            transactionsData[indexOfFirstArrayOfTransactionsData][
              indexOfSecondaryArrayOfTransactionsData
            ],
          frequency: 1,
        });
      } else {
        let found: boolean = false;
        for (
          let indexOfItemsFrequency = 0;
          indexOfItemsFrequency < itemsFrequency.length && !found;
          indexOfItemsFrequency += 1
        ) {
          if (
            itemsFrequency[indexOfItemsFrequency]._id
            === transactionsData[indexOfFirstArrayOfTransactionsData][
              indexOfSecondaryArrayOfTransactionsData
            ]
          ) {
            itemsFrequency[indexOfItemsFrequency].frequency += 1;
            found = true;
          }
        }
        if (found === false) {
          itemsFrequency.push({
            _id:
              transactionsData[indexOfFirstArrayOfTransactionsData][
                indexOfSecondaryArrayOfTransactionsData
              ],
            frequency: 1,
          });
        }
      }
    }
  }
  return itemsFrequency;
};

export default step1CountingPerItemFrequency;

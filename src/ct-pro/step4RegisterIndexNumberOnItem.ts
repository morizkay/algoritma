let tempData: any;

const step4RegisterIndexNumberOnItem = (data: any) => {
  tempData = data;
  for (let indexOfData = 0; indexOfData < data.length; indexOfData += 1) {
    tempData[indexOfData].index = indexOfData + 1;
  }

  return tempData;
};

export default step4RegisterIndexNumberOnItem;

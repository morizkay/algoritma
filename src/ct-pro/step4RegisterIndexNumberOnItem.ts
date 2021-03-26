const step4RegisterIndexNumberOnItem = (data: any) => {
  for (let indexOfData = 0; indexOfData < data.length; indexOfData += 1) {
    data[indexOfData].index = indexOfData + 1;
  }

  return data;
};

export default step4RegisterIndexNumberOnItem;

const step2EliminatedLessThanMinimumSupported = (
  itemsFrequency: any,
  minimumSupport: number,
) => itemsFrequency.filter((item: any) => item.frequency >= minimumSupport);

export default step2EliminatedLessThanMinimumSupported;

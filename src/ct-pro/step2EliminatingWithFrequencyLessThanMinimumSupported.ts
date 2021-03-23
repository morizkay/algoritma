const step2EliminatingWithFrequencyLessThanMinimumSupported = (
  itemsFrequency: any,
  minimumSupport: number,
) => itemsFrequency.filter((item: any) => item.frequency >= minimumSupport);

export default step2EliminatingWithFrequencyLessThanMinimumSupported;

const step2EliminatedLessThanMinimumSupported = (
  itemsFrequency: any,
  minimumSupport: number,
) => itemsFrequency.filter((item: any) => item.frequent >= minimumSupport);

export default step2EliminatedLessThanMinimumSupported;

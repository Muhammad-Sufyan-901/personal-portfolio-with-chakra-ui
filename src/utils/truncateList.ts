export const truncateList = <T>(array: T[], startIndex: number, endIndex: number): T[] => {
  return array.slice(startIndex, endIndex);
};

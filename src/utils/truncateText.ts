export const truncateText = (text: string): string => {
  const textLimit: number = 75;

  return text.length > textLimit ? `${text.slice(0, textLimit)}...` : text;
};

export const truncateText = (text: string, textLimit: number): string => {
  return text.length > textLimit ? `${text.slice(0, textLimit)}...` : text;
};

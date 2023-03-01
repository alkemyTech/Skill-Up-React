export const truncateString = (string) => {
  if (!string) return;
  if (string.length < 22) return string;

  return string.split('').splice(0, 22).join('') + '...';
};

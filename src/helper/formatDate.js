export const getFormattedDate = () => { // Returns the date in the format "Year-Month-Date" (e.g. "2021-6-21")
  const today = new Date();
  return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
};

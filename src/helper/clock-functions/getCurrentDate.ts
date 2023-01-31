export const getCurrentDate = () => {
  const date = new Date();

  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();

  return `${month + 1}/${day}/${year}`
}
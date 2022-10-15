export const formatDate = (date) => {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const newDate = new Date(date).toLocaleDateString("es-AR", options);
  return newDate;
};

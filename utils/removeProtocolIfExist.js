export const removeProtocolIfExist = (link) => {
  let newLink = link.split("//");
  if (newLink.length > 1) {
    newLink.shift();
  }
  return newLink;
};

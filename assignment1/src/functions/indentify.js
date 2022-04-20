const identify = (header) => {
  return header.split(" ").join("-").toLocaleLowerCase();
};

export default identify;

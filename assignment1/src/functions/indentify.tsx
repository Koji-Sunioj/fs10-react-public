const identify = (header:string) => {
  return header.split(" ").join("-").toLocaleLowerCase();
};

export default identify;

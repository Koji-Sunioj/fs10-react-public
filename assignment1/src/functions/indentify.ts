const identify = (header: string): string => {
  return header.split(" ").join("-").toLocaleLowerCase();
};

export default identify;

const seperateHeader = (children) => {
  let flatChildren = [].concat.apply([], children);
  let header = [];
  let others = [];

  flatChildren.forEach((element) => {
    element.props.Tag && element.props.Tag.includes("h")
      ? header.push(element)
      : others.push(element);
  });

  return [header, others];
};

export default seperateHeader;

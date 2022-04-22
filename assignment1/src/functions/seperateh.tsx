const seperateHeader = (children:any[]) => {
  let flatChildren: any[] = [].concat.apply([], children);
  let header: any[] = [];
  let others: any[] = [];
  flatChildren.forEach((element) => {
    element.props.Tag && element.props.Tag.includes("h")
      ? header.push(element)
      : others.push(element);
  });

  return [header, others];
};

export default seperateHeader;

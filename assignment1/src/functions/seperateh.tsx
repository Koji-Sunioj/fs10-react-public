import { ReactNode } from "react";
import React from "react";

const seperateHeader = (children: any[]) => {
  let flatChildren: any[] = [].concat(...children);
  console.log(flatChildren)
  let header: ReactNode[] = [];
  let others: ReactNode[] = [];
  flatChildren.forEach((element) => {
    element.props.Tag && element.props.Tag.includes("h")
      ? header.push(element)
      : others.push(element);
  });
  //console.log(header)
  return [header, others];
};

export default seperateHeader;

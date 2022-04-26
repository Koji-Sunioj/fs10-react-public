import React, { ReactNode } from "react";
import HeaderProp from "../types/HeaderProp";
import identify from "../../functions/indentify";

const DynamicHeader = ({ Tag, text }: HeaderProp) => {
  const elementId: string = identify(text);
  const theElement: ReactNode = React.createElement(
    Tag,
    { id: elementId },
    text
  );
  return theElement;
};

export default DynamicHeader;

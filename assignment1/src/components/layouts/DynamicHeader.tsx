import React, { ReactNode } from "react";
import headerProp from "../../functions/headerprop";
import identify from "../../functions/indentify";

const DynamicHeader = ({ Tag, text }: headerProp) => {
  const elementId: string =  identify(text);
  const theElement: ReactNode = React.createElement(
    Tag,
    { id: elementId },
    text
  );
  return theElement;
};

export default DynamicHeader;

import React, { ReactNode } from "react";

import identify from "../../functions/indentify";

type DynamicHeaderProps = {
  Tag: string;
  text: string;
  id?: string;
};

const DynamicHeader = ({ Tag, text, id }: DynamicHeaderProps) => {
  const elementId: string = id ? id : identify(text);
  const theElement: ReactNode = React.createElement(
    Tag,
    { id: elementId },
    text
  );
  return theElement;
};

export default DynamicHeader;

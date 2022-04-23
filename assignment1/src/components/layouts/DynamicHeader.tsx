import React, { ReactNode } from "react";

import identify from "../../functions/indentify";

type DynamicHeaderProps = {
  Tag: string;
  text: string;
  id?: string;
};

const DynamicHeader = ({ Tag, text, id }: DynamicHeaderProps) => {
  // <Tag id={id ? id : identify(text)}>{text}</Tag>;
  const elementid: string = id ? id : identify(text);
  const el: ReactNode = React.createElement(Tag, { id: elementid }, text);
  return el;
};

export default DynamicHeader;

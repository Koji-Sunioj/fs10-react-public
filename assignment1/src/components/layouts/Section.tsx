import { ReactElement, ReactNode } from "react";
import DynamicHeader from "./DynamicHeader";
import HeaderProp from "../types/HeaderProp";

type SectionProps = {
  children: ReactNode[] | ReactElement;
  gridType: string;
  header: HeaderProp;
};

const Section = ({ children, gridType, header }: SectionProps) => {
  return (
    <section>
      <DynamicHeader Tag={header.Tag} text={header.text} />
      <div className={gridType}>{children}</div>
    </section>
  );
};

export default Section;

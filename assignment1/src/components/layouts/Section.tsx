import { ReactNode } from "react";
import seperateHeader from "../../functions/seperateh";

type SectionProps = {
  children: ReactNode[];
  gridType: string;
};

const Section = ({ children, gridType }: SectionProps) => {
  const [header, others] = seperateHeader(children);

  return (
    <section>
      {header}
      <div className={gridType}>{others}</div>
    </section>
  );
};

export default Section;

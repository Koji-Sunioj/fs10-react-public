import { ReactNode } from "react";
import seperateHeader from "../../functions/seperateh";
import identify from "../../functions/indentify";

type AppProps = {
  children:  ReactNode[],
  gridType: string;
}; 

const Section = ({ children, gridType }:AppProps) => {
  const [header, others] = seperateHeader(children)
  
  return (
    <section>
      {header}
      <div className={gridType}>{others}</div>
    </section>
  );
};


export default Section;

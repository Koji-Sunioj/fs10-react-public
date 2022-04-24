import { ReactNode } from "react";

type ChildrenProps = { children: ReactNode };

const GridColumn = ({ children }: ChildrenProps) => {
  return (
    <div className="grid">
      <div className="grid-item">{children}</div>
    </div>
  );
};

export default GridColumn;

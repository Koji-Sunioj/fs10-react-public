import { ReactNode } from "react";

const GridColumn = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid">
      <div className="grid-item">{children}</div>
    </div>
  );
};

export default GridColumn;

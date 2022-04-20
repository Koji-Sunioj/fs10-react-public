import PropTypes from "prop-types";

const GridColumn = ({ children }) => (
  <div className="grid">
    <div className="grid-item">{children}</div>
  </div>
);

GridColumn.propTypes = {
  children: PropTypes.node,
};

export default GridColumn;

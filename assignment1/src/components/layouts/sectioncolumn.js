import PropTypes from "prop-types";

import seperateHeader from "../../functions/seperateh";

const SectionColumn = ({ children }) => {
  const [header, others] = seperateHeader(children);
  return (
    <section>
      {header}
      <div className="grid-column">{others}</div>
    </section>
  );
};

SectionColumn.propTypes = {
  children: PropTypes.node,
};
export default SectionColumn;

import PropTypes from "prop-types";

import seperateHeader from "../../functions/seperateh";

const SectionRow = ({ children }) => {
  const [header, others] = seperateHeader(children);

  return (
    <section>
      {header}
      <div className="gridlike">{others}</div>
    </section>
  );
};

SectionRow.propTypes = {
  children: PropTypes.node,
};

export default SectionRow;

import PropTypes from "prop-types";

import seperateHeader from "../../functions/seperateh";

const Section = ({ children, gridType }) => {
  const [header, others] = seperateHeader(children);
  return (
    <section>
      {header}
      <div className={gridType}>{others}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  gridType: PropTypes.string,
};
export default Section;

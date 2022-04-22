import PropTypes from "prop-types";

import identify from "../../functions/indentify";

const DynamicHeader = ({ Tag, text, id = false }) => (
  <Tag id={id ? id : identify(text)}>{text}</Tag>
);

DynamicHeader.propTypes = {
  Tag: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
};

export default DynamicHeader;

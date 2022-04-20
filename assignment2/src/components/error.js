import PropTypes from "prop-types";

import GridColumn from "./gridcolumn";

const ErrorMessage = ({ tried }) => {
  const errorType = (
    <p>
      Can't find any country called <strong>{tried}</strong> &#129300;
    </p>
  );

  return <GridColumn>{errorType}</GridColumn>;
};

ErrorMessage.propTypes = { tried: PropTypes.string };

export default ErrorMessage;

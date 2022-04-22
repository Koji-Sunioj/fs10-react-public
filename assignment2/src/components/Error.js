import PropTypes from "prop-types";

import GridColumn from "./GridColumn";

const ErrorMessage = ({ tried }) => {
  const ErrorType = (
    <p>
      Can't find any country called <strong>{tried}</strong> &#129300;
    </p>
  );
  return <GridColumn>{ErrorType}</GridColumn>;
};

ErrorMessage.propTypes = { tried: PropTypes.string };

export default ErrorMessage;

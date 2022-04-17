import GridColumn from "./gridcolumn";

const ErrorMessage = ({ tried, type }) => {
  let errorType;

  if (type === "user") {
    errorType = (
      <p>
        Can't find any country called <strong>{tried}</strong> &#129300;
      </p>
    );
  } else if (type === "server") {
    errorType = <p>Server response error &#129300;</p>;
  }

  return <GridColumn>{errorType}</GridColumn>;
};

export default ErrorMessage;

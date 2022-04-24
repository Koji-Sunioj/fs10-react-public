import GridColumn from "./GridColumn";

const ErrorMessage = ({ tried }: { tried: string }) => {
  const ErrorType = (
    <p>
      Can't find any country called <strong>{tried}</strong> &#129300;
    </p>
  );
  return <GridColumn>{ErrorType}</GridColumn>;
};

export default ErrorMessage;

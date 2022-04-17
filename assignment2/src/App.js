import "./App.css";
import { useRef } from "react";

import GridColumn from "./components/gridcolumn";
import useCountry from "./hooks/usecountry";
import GotCountry from "./components/gotcountry";
import ErrorMessage from "./components/error";
import Loading from "./components/loading";

function App() {
  const [data, error, loading, setCountry] = useCountry(null);

  const countryInput = useRef();

  const getCountryData = async (event) => {
    event.preventDefault();
    const country = countryInput.current.value;
    setCountry(country);
  };

  return (
    <>
      <GridColumn>
        <h1>RestCountries API</h1>
        <form onSubmit={getCountryData}>
          <label htmlFor="country">Country Name: </label>
          <input
            type="text"
            name="country"
            placeholder="Finland, Suomi.."
            id="country"
            ref={countryInput}
          />
          <button>Go</button>
        </form>
      </GridColumn>
      {loading && <Loading />}
      {data && <GotCountry country={data} />}
      {error && (
        <ErrorMessage tried={countryInput.current.value} type={error} />
      )}
    </>
  );
}

export default App;

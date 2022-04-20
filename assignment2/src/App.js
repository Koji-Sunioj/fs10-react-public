import "./App.css";

import GridColumn from "./components/gridcolumn";
import withcountry from "./hocs/withcountry";
import GotCountry from "./components/gotcountry";
import ErrorMessage from "./components/error";
import Loading from "./components/loading";

const App = ({ country, data, update, isloading, isError }) => {
  const getCountryData = (event) => {
    event.preventDefault();
    const newcountry = event.target.country.value;
    update(newcountry);
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
          />
          <button>Go</button>
        </form>
      </GridColumn>
      {isError && <ErrorMessage tried={country} />}
      {isloading && <Loading />}
      {data && <GotCountry countries={data} />}
    </>
  );
};

export default withcountry()(App);

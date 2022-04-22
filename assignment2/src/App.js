import "./App.css";
import PropTypes from "prop-types";

//import useCountry from "./hooks/usecountry";
import GridColumn from "./components/GridColumn";
import withcountry from "./hocs/withcountry";
import GotCountry from "./components/GotCountry";
import ErrorMessage from "./components/Error";
import Loading from "./components/Loading";

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

App.propTypes = {
  country: PropTypes.string,
  data: PropTypes.array,
  update: PropTypes.func,
  isloading: PropTypes.bool,
  isError: PropTypes.bool,
};

export default withcountry()(App);

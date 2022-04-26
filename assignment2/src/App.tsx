import "./App.css";

//import useCountry from "./hooks/usecountry";
import GridColumn from "./components/GridColumn";
import withcountry from "./hocs/withCountry";
import GotCountry from "./components/GotCountry";
import ErrorMessage from "./components/Error";
import Loading from "./components/Loading";
import CountryProps from "./types/CountryProps";


type AppProps = {
  country: string;
  data: CountryProps[] | null
  update: (newcountry: string) => void;
  isloading: boolean;
  isError: boolean;
};

const App = ({ country, data, update, isloading, isError }: AppProps) => {

  const getCountryData = (event: React.FormEvent): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      country: { value: string };
    };
    update(target.country.value);
  };

  return (
    <>
      <GridColumn>
        <h1>RestCountries API</h1>
        <form onSubmit={getCountryData}>
          <label htmlFor="country">Country Names: </label>
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
      {data  && <GotCountry countries={data} />}
    </>
  );
};

export default withcountry(App);

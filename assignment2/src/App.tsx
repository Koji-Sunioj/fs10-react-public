import "./App.css";

import GridColumn from "./components/GridColumn";
import withcountry from "./hocs/withCountry";
import GotCountry from "./components/GotCountry";
import Loading from "./components/Loading";
import CountryProps from "./types/CountryProps";

type AppProps = {
  country?: string;
  data?: CountryProps[] | null;
  update?: (newcountry: string) => void;
  isloading?: boolean;
  isError?: boolean;
};

const App = ({ country, data, update, isloading, isError }: AppProps) => {
  const getCountryData = (event: React.FormEvent): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      country: { value: string };
    };
    update!(target.country.value);
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
      {isError && (
        <GridColumn>
          Can't find any country called <strong>{country}</strong> &#129300;
        </GridColumn>
      )}
      {isloading && <Loading />}
      {data && <GotCountry countries={data} />}
    </>
  );
};

export default withcountry(App);

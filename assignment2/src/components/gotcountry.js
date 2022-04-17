import GridColumn from "./gridcolumn";

const GotCountry = ({ country }) => {
  const cleanObject = (object) => {
    return Object.entries(object).map((entry) => entry[1]);
  };

  return (
    <GridColumn>
      <h2>
        {country.flag}
        {country.name.common}
      </h2>
      <p>land area: {Intl.NumberFormat().format(country.area)}</p>
      <p>region: {country.subregion}</p>
      <p>population: {Intl.NumberFormat().format(country.population)}</p>
      <p>capital: {country.capital.join(",")}</p>
      <p>languages: {cleanObject(country.languages).join(",")}</p>
    </GridColumn>
  );
};

export default GotCountry;

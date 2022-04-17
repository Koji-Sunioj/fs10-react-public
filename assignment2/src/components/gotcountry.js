import GridColumn from "./gridcolumn";

const GotCountry = ({ country }) => {
  const cleanObject = (object, field = false) => {
    return Object.entries(object).map((entry) =>
      field ? entry[1][field] : entry[1]
    );
  };

  const getOfficial = (names) => {
    const officialNames = cleanObject(names.nativeName, "official");
    const filtered = new Set([names.official, ...officialNames]);
    return [...filtered];
  };

  return (
    <GridColumn>
      <h2>
        {country.flag}
        {country.name.common}
      </h2>
      <p>capital: {country.capital.join(", ")}</p>
      <p>official names: {getOfficial(country.name).join(", ")}</p>
      <p>land area: {Intl.NumberFormat().format(country.area)}</p>
      <p>region: {country.subregion}</p>
      <p>population: {Intl.NumberFormat().format(country.population)}</p>
      <p>languages: {cleanObject(country.languages).join(", ")}</p>
    </GridColumn>
  );
};

export default GotCountry;

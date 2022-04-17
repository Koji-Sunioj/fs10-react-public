import GridColumn from "./gridcolumn";

const GotCountry = ({ country }) => {
  const cleanObject = (object) => {
    return Object.entries(object).map((entry) => entry[1]);
  };

  const getOfficial = (names) => {
    const officialNames = Object.entries(names.nativeName).map(
      (element) => element[1].official
    );
    const filtered = new Set(officialNames);
    return [names.official, ...filtered];
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

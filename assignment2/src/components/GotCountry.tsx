import GridColumn from "./GridColumn";

type CountryProps = {
  countries: any[];
};

const GotCountry = ({ countries }: CountryProps) => {
  const cleanObject = (object: {}, field: string | boolean = false) => {
    return Object.entries(object).map((entry: any) =>
      typeof field === "string" ? entry[1][field] : entry[1]
    );
  };

  type NameData = {
    common: string;
    nativeName: {};
    official: string;
  };

  const getOfficial = (names: NameData) => {
    const officialNames = cleanObject(names.nativeName, "official");
    const filtered = new Set([names.official, ...officialNames]);
    return [...filtered];
  };

  return (
    <>
      {countries.map((country) => (
        <GridColumn key={country.ccn3}>
          <h2>
            {country.flag}
            {country.name.common}
          </h2>
          {country.capital && <p>capital: {country.capital.join(", ")}</p>}
          <p>official names: {getOfficial(country.name).join(", ")}</p>
          <p>land area: {Intl.NumberFormat().format(country.area)}</p>
          <p>region: {country.subregion}</p>
          <p>population: {Intl.NumberFormat().format(country.population)}</p>
          <p>languages: {cleanObject(country.languages).join(", ")}</p>
        </GridColumn>
      ))}
    </>
  );
};

export default GotCountry;

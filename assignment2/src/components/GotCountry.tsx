import GridColumn from "./GridColumn";
import CountryProps from "../types/CountryProps";

type CountryPropType = {
  countries: CountryProps[];
};

const GotCountry = ({ countries }: CountryPropType) => {
  type cleanObjectProps = CountryProps["languages"] | { [key: string]: [] };

  const cleanObject = (
    object: cleanObjectProps,
    field: string | boolean = false
  ): string[] => {
    const filtered = Object.entries(object).map((entry) =>
      typeof field === "string" ? entry[1][field] : entry[1]
    );
    return filtered;
  };

  const getOfficial = (names: CountryProps["name"]): string[] => {
    const officialNames: string[] = cleanObject(names.nativeName, "official");
    const filtered: Set<string> = new Set([names.official, ...officialNames]);
    return [...filtered];
  };

  return (
    <>
      {countries.map((country) => (
        <GridColumn key={country.ccn3}>
          <h2>
            <>{country.flag}</>
            <>{country.name.common}</>
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

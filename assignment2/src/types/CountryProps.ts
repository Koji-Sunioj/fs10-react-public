type CountryProps = {
  ccn3: string;
  flag: symbol;
  name: {
    common: string;
    nativeName: {};
    official: string;
  };
  capital?: string[];
  area: number;
  subregion: string;
  population: number;
  languages: { [key: string]: string | {} };
};

export default CountryProps;

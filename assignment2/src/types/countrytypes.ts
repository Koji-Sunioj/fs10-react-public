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
  languages: string[];
};

export default CountryProps;

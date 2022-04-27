import { useState, useEffect } from "react";

import CountryProps from "../types/CountryProps";

const withCountry = <Props,>(AppComponent: React.ComponentType<Props>) => {
  const WithCountry = (props: Props) => {
    const [theCountry, setCountry] = useState<string | null>(null);
    const [data, setData] = useState<CountryProps[] | null>(null);
    const [isError, setError] = useState<boolean>(false);
    const [isloading, setLoading] = useState<boolean>(false);

    const updateCountry = (country: string) => {
      if (theCountry != country) {
        setData(null);
        setLoading(true);
        setError(false);
        setCountry(country);
      }
    };

    useEffect(() => {
      fetchData();
    }, [theCountry]);

    async function fetchData(): Promise<void> {
      if (theCountry) {
        await fetch(`https://restcountries.com/v3.1/name/${theCountry}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error();
            } else {
              return response.json();
            }
          })
          .then((data) => {
            setLoading(false);
            setData(data);
          })
          .catch(() => {
            setLoading(false);
            setError(true);
          });
      }
    }

    return (
      <AppComponent
        {...props}
        country={theCountry}
        update={updateCountry}
        data={data}
        isError={isError}
        isloading={isloading}
      />
    );
  };

  return WithCountry;
};

export default withCountry;

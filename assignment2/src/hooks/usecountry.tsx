import { useState, useEffect } from "react";

const useCountry = (country:string) => {
  const [theCountry, setCountry] = useState<string>(country);
  const [data, setData] = useState<any[]|null>(null);
  const [isError, setError] = useState<boolean>(false);
  const [isloading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (theCountry) {
      setData(null);
      setLoading(true);
      setError(false);
      fetchData();
    }
  }, [theCountry]);

  async function fetchData(): Promise<void> {
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

  return [data, isError, isloading, setCountry];
};

export default useCountry;

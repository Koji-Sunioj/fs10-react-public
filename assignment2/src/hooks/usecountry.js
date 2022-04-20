import { useState, useEffect } from "react";

const useCountry = (country) => {
  const [theCountry, setCountry] = useState(country);
  const [data, setData] = useState(null);
  const [isError, setError] = useState(false);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    if (theCountry) {
      setData(null);
      setLoading(true);
      setError(null);
      fetchData();
    }
  }, [theCountry]);

  async function fetchData() {
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

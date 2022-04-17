import { useState, useEffect } from "react";

const useCountry = (country) => {
  const [theCountery, setCountry] = useState(country);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (theCountery) {
      fetch(`https://restcountries.com/v3.1/name/${theCountery}`)
        .then((res) => res.json())
        .then((data) => setData(data[0]));
    }
  }, [theCountery]);

  return [data, setCountry];
};

export default useCountry;

import "./App.css";
import { useState, useEffect } from "react";
import useCountry from "./components/usecountry";

function App() {
  const [data, setCountry] = useCountry("");

  function test(event) {
    event.preventDefault();
    const country = event.target.elements.country.value;
    setCountry(country);
  }

  const GotCountry = () => {
    const cleanObject = (object) => {
      return Object.entries(object).map((lang) => lang[1]);
    };

    return (
      <div className="grid">
        <div className="grid-item">
          <h1>
            {data.flag}
            {data.name.common}
          </h1>
          <p>land area: {Intl.NumberFormat().format(data.area)}</p>
          <p>region: {data.subregion}</p>
          <p>population: {Intl.NumberFormat().format(data.population)}</p>
          <p>capital: {data.capital.join(",")}</p>
          <p>languages: {cleanObject(data.languages).join(",")}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="grid">
        <div className="grid-item">
          <h1>RestCountries API</h1>
          <form onSubmit={test}>
            <label htmlFor="country">Country Name: </label>
            <input
              type="text"
              name="country"
              placeholder="Finland, Suomi.."
              id="country"
            />
            <button>Go</button>
          </form>
        </div>
      </div>
      {data !== null && <GotCountry />}
    </>
  );
}

export default App;

import React, { Component } from "react";
import CountryProps from "../types/countrytypes";

const withcountry = (AppComponent: React.ElementType) => {
  type ClassTypes = {
    country: string | null;
    data: CountryProps[] | null;
    loading: boolean;
    error: boolean;
  };

  class WithFetch extends Component<{}, ClassTypes> {
    constructor(props: ClassTypes) {
      super(props);
      this.state = {
        country: null,
        data: null,
        loading: false,
        error: false,
      };
    }

    setCountry = async (newcountry: string) => {
      if (newcountry !== this.state.country) {
        this.setState({
          country: newcountry,
          loading: true,
          data: null,
          error: false,
        });
        try {
          const newData = await this.fetchCountry(newcountry);
          this.setState({ data: newData, loading: false });
        } catch {
          this.setState({ loading: false, error: true });
        }
      }
    };

    fetchCountry(country: string): Promise<CountryProps[]> {
      let fetched = fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("server error");
          } else {
            return response.json();
          }
        })
        .then((data) => data);
      return fetched;
    }

    render() {
      return (
        <AppComponent
          update={(newcountry: string) => {
            this.setCountry(newcountry);
          }}
          country={this.state.country}
          data={this.state.data}
          isloading={this.state.loading}
          isError={this.state.error}
        />
      );
    }
  }

  return WithFetch;
};

export default withcountry;

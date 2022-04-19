import { Component } from "react";

const withcountry = (country) => (WrappedData) => {
  class WithFetch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        country: country,
        data: null,
        loading: false,
        error: false,
      };
    }

    setCountry = async (newcountry) => {
      this.setState({
        country: newcountry,
        loading: true,
        data: null,
        error: false,
      });
      const newData = await this.fetchCountry(newcountry);
      if (newData.error) {
        this.setState({ data: null, loading: false, error: true });
      } else if (newData.data) {
        this.setState({ data: newData.data, loading: false, error: false });
      }
    };

    async fetchCountry(country) {
      let newdata = {};
      await fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("server error");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          newdata.data = data;
        })
        .catch(() => {
          newdata.error = true;
        });
      return newdata;
    }

    render() {
      return (
        <WrappedData
          update={(country) => {
            this.setCountry(country);
          }}
          country={this.state.country}
          data={this.state.data}
          isloaded={this.state.loading}
          isError={this.state.error}
        />
      );
    }
  }

  return WithFetch;
};

export default withcountry;

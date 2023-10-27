import React from "react";
import "./ContainerCard.css";
import Loading from "./pages/Loading";
import { Link } from "react-router-dom";

const ContainerCard = ({ clickedRegion, searchTerm }) => {
  const [countries, setCountries] = React.useState([]);
  const [filteredCountriesByTerm, setFilteredCountriesByTerm] = React.useState(
    []
  );
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");

  const memoizedGetCountry = React.useCallback(async () => {
    setIsLoading(true);

    try {
      const url = await fetch("https://restcountries.com/v3.1/all");
      const dataCountry = await url.json();
      setCountries(dataCountry);
    } catch (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    memoizedGetCountry();
  }, [memoizedGetCountry]);

  const filteredCountries = countries.filter((country) => {
    return country.region === clickedRegion;
  });

  React.useEffect(() => {
    const filtered = countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setFilteredCountriesByTerm(filtered);
  }, [clickedRegion, searchTerm, countries]);

  function renderCountry(d) {
    return (
      <Link to={d.name.common} key={d.cca3} className="links">
        <div className="card">
          <div className="flagCountry">
            <img src={d.flags.png} alt={d.flags.alt} className="imgFlag" />
          </div>
          <div className="textCountry">
            <h1 className="nameCoutry">{d.name.common}</h1>
            <p className="textPopulation">
              Population:{" "}
              <span className="numberPopulation">
                {d.population.toLocaleString()}
              </span>
            </p>
            <p className="textRegion">
              Region: <span className="nameRegion">{d.region}</span>
            </p>
            <p className="textCapital">
              Capital: <span className="nameCapital">{d.capital}</span>
            </p>
          </div>
        </div>
      </Link>
    );
  }

  const renderedCountries = () => {
    if (clickedRegion === "Filter by Region" && searchTerm === "") {
      // Renderiza todos os países
      return countries.map(renderCountry);
    } else if (clickedRegion === "Filter by Region" && searchTerm !== "") {
      // Renderiza os países filtrados pela região e pelo termo de pesquisa
      return filteredCountriesByTerm.map(renderCountry);
    } else {
      // Renderiza os países filtrados pela região
      return filteredCountries.map(renderCountry);
    }
  };

  return <>{isLoading ? <Loading /> : renderedCountries()}</>;
};

export default ContainerCard;

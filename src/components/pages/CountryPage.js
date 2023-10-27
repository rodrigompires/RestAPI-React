import React from "react";
import "./CountryPage.css";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ReactComponent as IconArrowLeft } from "../../assets/images/arrow_left.svg";
import { ReactComponent as IconLocation } from "../../assets/images/location.svg";
import NotFound from "./NotFound";
const iso = require("iso-3166-1");

const CountryPage = () => {
  const [country, setCountry] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    async function fetchCountry(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setCountry(json);

        if (response.status !== 200) {
          const errorObject = response.statusText;
          const errorArray = errorObject;
          const errorCode = response.status;
          setError([errorCode, errorArray]);
        }
      } catch (erro) {
        setError("Erro");
      } finally {
        setLoading(false);
      }
    }
    // fetchCountry(`https://restcountries.com/v3.1/name/${id}`)
    fetchCountry(`https://restcountries.com/v3.1/name/${id}?fullText=true`);
  }, [id]);

  if (country === null) return null;
  if (error) return <NotFound error={error} />;
  if (loading) return <Loading />;

  return (
    <>
      <section className="containerPageCountry">
        <Link to={"/RestAPI-React/"} className="linkBack">
          <div className="inputButton">
            <IconArrowLeft className="iconArrowLeft" />
            Back
          </div>
        </Link>
        {country.map((data) => {
          const {
            name,
            population,
            region,
            subregion,
            capital,
            currencies,
            tld,
            languages,
            flags,
            borders,
            maps,
          } = data;

          return (
            <>
              <div className="details" key={name}>
                <div className="containerFlagCountry">
                  <img
                    src={flags.svg}
                    alt={flags.alt}
                    className="flagCountries"
                  />
                </div>

                <div className="containerDetails">
                  <div className="detailsOne">
                    <h1 className="detailsNameCountry">{name.common}</h1>
                    {name.nativeName ? (
                      <p className="detailsNativeName">
                        Native Name:{" "}
                        <span key={name.nativeName}>
                          {Object.values(name.nativeName)
                            .map((el) => el.common)
                            .join(", ")}
                        </span>
                      </p>
                    ) : (
                      <p className="detailsNativeName">
                        Native Name: <span key={name.comm}>{name.common}</span>
                      </p>
                    )}
                    <p className="detailsPopulation">
                      Population: <span>{population.toLocaleString()}</span>
                    </p>
                    <p className="detailsRegion">
                      Region: <span>{region}</span>
                    </p>
                    <p className="detailsSubRegion">
                      Sub Region: <span>{subregion}</span>
                    </p>
                    <p className="detailsCapital">
                      Capital: <span>{capital}</span>
                    </p>

                    <a
                      href={maps.googleMaps}
                      target="_blank"
                      rel="noreferrer"
                      className="linkMaps"
                    >
                      <div className="maps">
                        <p className="detailsGoogleMaps">
                          See on Google Maps:{" "}
                        </p>
                        <div className="button">
                          Google
                          <IconLocation className="iconLocation" />
                        </div>
                      </div>
                    </a>

                    <div className="containerBorders">
                      <p>Border Countries:</p>
                      <ul className="listBorders">
                        {!borders ? (
                          <p>there are no borders</p>
                        ) : (
                          borders.map((border, index) => (
                            <Link
                              className="itemsListBorders"
                              key={index}
                              to={`/${iso
                                .whereAlpha3(border)
                                .country.replace("-")
                                .toLowerCase()}`}
                            >
                              {border}
                            </Link>
                          ))
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="detailsTwo">
                    <p className="detailsTld">
                      Top Level Domain: <span>{tld}</span>
                    </p>
                    {currencies ? (
                      <p className="detailsCurrencies">
                        Currencies:{" "}
                        <span key={currencies}>
                          {Object.values(currencies)
                            .map((el) => el.name)
                            .join(", ")}
                        </span>
                      </p>
                    ) : (
                      <p className="detailsCurrencies">
                        Currencies: <span key={currencies}>{currencies}</span>
                      </p>
                    )}
                    {languages ? (
                      <p className="detailsLanguages">
                        Languages:{" "}
                        <span key={languages}>
                          {Object.values(languages)
                            .map((el) => el)
                            .join(", ")}
                        </span>
                      </p>
                    ) : (
                      <p className="detailsLanguages">
                        Languages: <span key={languages}>{languages}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default CountryPage;

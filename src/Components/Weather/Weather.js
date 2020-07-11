import React, { useState } from "react";
import { Container } from "reactstrap";
import style from "./weather.module.css";
import NavBar from "../NavBar/NavBar";

const api = {
  key: "8573082bf3b311f5ff16c81cf080fa2c",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month}, ${year}`;
  };

  return (
    <div>
      <div
        className={
          typeof weather.main != "undefined"
            ? weather.main.temp > 16
              ? `${style.weatherCold} ${style.headerbg}`
              : `${style.headerbg}`
            : `${style.headerbg}`
        }
      >
        <NavBar />
        <Container>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className={style.searchForm}>
                <div className={style.inputWithIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className={style.searchIcon}
                  >
                    <path d="M15.784 13.68l-4.096-4.096c.585-.955.94-2.067.94-3.27a6.315 6.315 0 1 0-6.314 6.314 6.253 6.253 0 0 0 3.27-.937l4.096 4.094a.751.751 0 0 0 1.052 0l1.052-1.052a.75.75 0 0 0 0-1.053zm-9.47-3.157a4.21 4.21 0 1 1 0-8.419 4.21 4.21 0 0 1 0 8.42z"></path>
                  </svg>
                  <input
                    type="search"
                    className={style.searchInput}
                    placeholder="city, place, or country..."
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                  />
                </div>
                <span class={style.suggestion}>
                  Suggestions: <strong>Abuja</strong> | <strong>Kaduna</strong>{" "}
                  | <strong>Makurdi</strong> | <strong> Zaria</strong> |{" "}
                  <strong>Enugu</strong>
                </span>
              </div>
            </div>
          </div>
          {typeof weather.main != "undefined" ? (
            <div className="text-center">
              <div className={style.locationBox}>
                <div className={style.location}>
                  {weather.name}, {weather.sys.country}
                </div>
                <div className="text-muted">
                  <div class={`${style.date}`}>{dateBuilder(new Date())}</div>
                </div>
              </div>
              <div className={style.weatherBox}>
                <div className={style.temp}>
                  {Math.round(weather.main.temp)}&deg;c
                </div>
                <div className={style.weather}>{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </Container>
      </div>
    </div>
  );
}

export default Weather;

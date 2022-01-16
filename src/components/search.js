import React, { useState } from "react";

const SearchBar = ({ searchWeather }) => {
  const [cityName, setCityName] = useState("");

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchWeather(cityName);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Enter city name"
          value={cityName}
          onChange={handleInputChange}
        />
        <button type="button" class="btn btn-danger">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

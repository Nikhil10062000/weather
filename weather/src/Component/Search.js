import React from "react";
import { useDispatch } from "react-redux";
import { weather } from "../redux/productaction";

const Search = ({ setLogin, setCity }) => {
  const dispatch = useDispatch();

  return (
    <div className="search-page">
      <h1>Weather App </h1>

      <form onSubmit={() => setLogin(false)} className="form">
        <input
          className="input-search"
          type="text"
          onChange={(event) => {
            setCity(event.target.value);
            dispatch(weather(event.target.value));
          }}
        />
        <button
          className="btn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setLogin(false);
          }}
        >
          Search{" "}
        </button>
      </form>
    </div>
  );
};

export default Search;

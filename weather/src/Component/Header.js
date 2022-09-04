import React from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const result = useSelector((state) => state.weatherList);

  return (
    <>
      <div className="c-name">
        <h1>
          {result.name} - {result.sys.country}
        </h1>
      </div>
      <div className="temp">
        <h4>Temperature : {result.main.temp}</h4>
        <div>
          <h4>Minimum Temperature : {result.main.temp_min}</h4>

          <h4>Maximum Temperature : {result.main.temp_max}</h4>
        </div>
      </div>
    </>
  );
};

export default Header;

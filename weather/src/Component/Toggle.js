import React from "react";
import { useSelector } from "react-redux";
const Toggle = () => {
  const result = useSelector((state) => state.weatherList);
 
  return (
    <>
      <div class="grid-container">
        <h4 class="grid-item">
          Wind : Degree : {result.wind.deg}     
           Speed : {result.wind.speed}
        </h4>
        <h4 class="grid-item">Humidity :{result.main.humidity}</h4>
        <h4 class="grid-item">Pressure : {result.main.pressure}</h4>
        <h4 class="grid-item">
          Sunrise : {result.sys.sunrise} <br />
          Sunset : {result.sys.sunset}
        </h4>
      </div>
    </>
  );
};

export default Toggle;

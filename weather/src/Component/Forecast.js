import React, { useContext, useEffect, useState } from "react";
import { City } from "../App";
import Card from "./Card";
const Forecast = () => {
  const city = useContext(City);
  const [cast, setCast] = useState();
  const [serve , setServe] = useState(true)
  useEffect(() => {
    forecast();
  }, []);
  const forecast = async () => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0250330e89fd0dcacb3bf064f916abef`;
    const response = await fetch(url);
    let data = await response.json();
    setCast(data.list);
    setServe(false)
  };
  console.log(cast);

  return (
    <div>
      <h1>Forecast</h1>
       {
        serve ? <h1>Loading</h1> : <Card cast={cast}/>
       }
     
    </div>
  );
};

export default Forecast;

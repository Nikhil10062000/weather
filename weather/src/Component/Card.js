import React from "react";

const Card = ({ cast }) => {
  return (
    <>
      {cast.map((elem , id)=>{
        return (
          <div key={id} className="card">
        <h3 className="card-item">
          Day: {elem.dt_txt}
          Temperature : {elem.main.temp}
          Min Temperature : {elem.main.temp_min}
          Max Temperature : {elem.main.temp_max}
        </h3>
      </div>
        )
      })}
      
    </>
  );
};

export default Card;

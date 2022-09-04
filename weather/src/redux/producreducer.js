import {  SET_WEATHER  } from "./constant";

export const weatherList = (state = [], action) => {
   
  switch (action.type) {
    case SET_WEATHER:
      return action.payload;

    default:
      return state;
  }
};

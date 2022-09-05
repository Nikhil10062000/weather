import React , {useState} from 'react'
import Toggle from "./Toggle";
import Forecast from "./Forecast";
const Button = () => {
    const [toggle, setToggle] = useState(true);
    const [btnSwitch, setSwitch] = useState(true);
  return (
    <div>
      
      {btnSwitch ? (
        <button className="btn-switch"
          onClick={() => {
            setToggle(false);
            setSwitch(false);
            
          }}
        >
          Load More!!!
        </button>
      ) : (
        <button className="btn-switch"
          onClick={() => {
            setToggle(true);
            setSwitch(true);
          }}
        >
          Revert!!!
        </button>
      )}

      {toggle ? <Toggle /> : <Forecast/>}
    </div>
  )
}

export default Button

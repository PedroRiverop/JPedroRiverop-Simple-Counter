
import React from "react";
import { Paramos, Reiniciar, Reset, handleChange, alerta } from "../index.js";
import CardCounter from  './cardCounter.jsx';

const Home = (props)=>{

return(
  <div>
    <CardCounter time = {props.time} /> 
    <div className="d-flex align-items-center mx-5">
      <button type="button" className="btn btn-primary m-1" onClick={Paramos}>Pause II</button>
      <button type="button" className="btn btn-success m-1" onClick={Reiniciar}>Play ► </button>
      <button type="button" className="btn btn-danger m-1" onClick={Reset}>Reset ▪ </button>
      <div className="d-flex align-items-center ms-auto">
        <h5>Other Functions: </h5>
        <input type="number" onChange={handleChange} placeholder="Mi Cuenta regresiva en..." className="m-1"/>
        <input type="number" onChange={alerta} placeholder="Establecer alerta en..." className="m-1"/>
      </div>
    </div>
  </div>
)
}

export default Home;



import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-regular-svg-icons';
import { Paramos, Reiniciar, Reset, handleChange, alerta } from "../index.js";
const myStyle={
  width: 80,
  height: 120,
  backgroundColor: "#181818",
  color: "#fff",
  border: "2px solid #333",
  borderRadius: 5,
  fontWeight: "bold",
  fontSize: 72,
  fontFamily: "Times New Roman", 
  marginRight: 10,
  marginTop: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
const myStyleInput={
  width: 200,
  border: "2px solid #333",
  borderRadius: 5,
  backgroundColor: "#D8D8D8"
}
// Componente principal
const Card = (props) => {
  const digits = props.time.toString().split("").reverse();
  const array0 = [0,0,0,0,0,0]
  return (
    <div className="d-flex justify-content-center bg-black">
      <div>
        <h1 style={myStyle}><FontAwesomeIcon icon={faClock} /></h1>
      </div>
      <div className="d-flex" >
        {array0.map((element, index)=>(digits[index]) ? <h1 style={myStyle}>{digits[index]}</h1> : <h1 style={myStyle}>{element}</h1>).reverse()}
      </div>
    </div>
  )
}


const Home = (props)=>{

return(
  <div>
    <Card time = {props.time} />
    <div className="d-flex align-items-center mx-5">
      <button type="button" className="btn btn-primary m-1" onClick={Paramos}>Pause II</button>
      <button type="button" className="btn btn-success m-1" onClick={Reiniciar}>Play ► </button>
      <button type="button" className="btn btn-danger m-1" onClick={Reset}>Reset ▪ </button>
      <div className="d-flex align-items-center ms-auto">
        <h5>Other Functions: </h5>
        <input type="number" onChange={handleChange} placeholder="Mi Cuenta regresiva en..." className="m-1" style={myStyleInput}/>
        <input type="number" onChange={alerta} placeholder="Establecer alerta en..." className="m-1" style={myStyleInput}/>
      </div>
    </div>
      
    
  </div>
 
 
)

}



export default Home;


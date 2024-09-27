
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-regular-svg-icons';
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
// Componente principal
const Home = (props) => {
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
Home.defaultProps = {}


export default Home;


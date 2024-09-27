//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
const root = ReactDOM.createRoot(document.getElementById('app'))
let counter = 0;



function funcionContador () {
    counter ++;
}

const Paramos = () =>{
    funcionContador = function() {
        counter;
    }
}
const Reiniciar = () =>{
    funcionContador = function() {
        counter ++;
    }
}
const Reset = () =>{
    counter = 0;
    funcionContador = function() {
        counter ++;
    }
}
const handleChange = (event) => {
    counter=(event.target.valueAsNumber);
    funcionContador = function() {
        counter --;
    }
  };
  const alerta = (event) => {
   const timeAlert=(event.target.valueAsNumber);
    funcionContador = function() {
        if (timeAlert === counter) {
            alert("El contador llego al tiempo " + timeAlert);
        }
        counter ++;
        
    }
  };
export {Paramos, Reiniciar, Reset, handleChange, alerta}
setInterval(()=>{root.render(<Home time = {counter}/>) ; funcionContador();} , 1000);


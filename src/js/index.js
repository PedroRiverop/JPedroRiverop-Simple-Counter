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

setInterval(()=>{root.render(<Home time = {counter}/>,<div>
    <button>Hola</button>
  </div>) ; funcionContador();} , 1000);


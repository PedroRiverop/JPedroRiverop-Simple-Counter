
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-regular-svg-icons';

const CardCounter = (props) => {
    const digits = props.time.toString().split("").reverse();
    const array0 = [0,0,0,0,0,0]
    return (
      <div className="d-flex justify-content-center bg-black">
        <div>
          <h1><FontAwesomeIcon icon={faClock} /></h1>
        </div>
        <div className="d-flex" >
          {array0.map((element, index)=>(digits[index]) ? <h1>{digits[index]}</h1> : <h1>{element}</h1>).reverse()}
        </div>
      </div>
    )
  }
  
  export default CardCounter;
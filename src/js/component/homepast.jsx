import React, { useState, useEffect } from "react";

// Función que maneja el contador
const useContador = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContador(contador + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [contador]);

  return contador;
};

// Función que renderiza los dígitos
const Digits = ({ contador }) => {
  const digits = contador.toString().split("").map((digit, index) => (
    <div
      key={index}
      style={{
        width: 50,
        height: 50,
		backgroundColor: "#333",
        color: "#fff",
        border: "1px solid #333",
        borderRadius: 5,
        padding: 5,
        textAlign: "center",
        fontSize: 24,
        marginRight: 10,
		display: "inline-block"
      }}
    >
		<p>{digit}</p>
      
    </div>
  ));

  return digits
};

// Componente principal
const Home = () => {
  const contador = useContador();

  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Hello Rigo!</h1>
      
   
      <p>
        <Digits contador={contador} />
      </p>
      <a href="#" className="btn btn-success">
        If you see this green button... bootstrap is working...
      </a>
      <p>
        Made by{" "}
        <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
        love!
      </p>
    </div>
  );
};

export default Home;
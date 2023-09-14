import React, { useState } from "react";
import "./style.css";


function ItemListContainer({ greetings }) {
  const [saludo, setSaludo] = useState(greetings);

  function changeGreeting() {
    setSaludo(
      
        <p className="hw">HOLA MUNDO</p>
      

      );
  }

  return (
    <div className="itemListContainer">
      <Content saludo={saludo} changeGreeting={changeGreeting} />
    </div>
  );
}

function Content({ saludo, changeGreeting }) {
  return (
    <>
      <div>{saludo}</div>
      <button onClick={changeGreeting}>HACE CLICK PARA RECIBIR TU SALUDO</button>
    </>
  );
}

export default ItemListContainer;


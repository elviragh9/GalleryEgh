import { useState, forwardRef, useImperativeHandle } from "react";

export const Rate = forwardRef( ({ editaRate, id, rate }, ref) => {
  //const [rating, setRate] = useState(0);
  const stars = [1, 2, 3, 4, 5];
  var contador = 0;

  useImperativeHandle(ref, () => ({
    saludar: () => {
      console.log("Hola soy el rate " + id);
    },
  }));

  function imprime() {
    contador = contador + 1;
    console.log(contador);
  }

  function avisaPadre(star) {
   // setRate(star);
    //console.log(rating);
    imprime();
    editaRate(id, star);
  }

  return (
    <div className="stars">
      {stars.map((star, i) => (
        <span key={i} className={star > rate ? "star" : "active"}>
          <a onClick={() => avisaPadre(star)}>{"\u2605"}</a>
        </span>
      ))}
      <br />
      <span>{rate}</span>
    </div>
  );
});

//rafc
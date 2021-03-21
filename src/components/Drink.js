import React from "react";
import { Link } from "react-router-dom";

export const Drink = (props) => {
  const {
    strDrinkThumb,
    strDrink,
    strGlass,
    strAlcoholic,
    idDrink,
  } = props.props;
  return (
    <div className="drink">
      <img src={strDrinkThumb} alt={strDrink} />
      <div className="text">
        <h1>{strDrink}</h1>
        <h2>{strGlass}</h2>
        <p>{strAlcoholic}</p>
        <Link className="btn" to={`/drinks/${idDrink}`}>
          Learn more
        </Link>
      </div>
    </div>
  );
};

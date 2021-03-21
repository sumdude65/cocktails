import React from "react";
import { Drink } from "./Drink";

export const DrinkList = ({ drinks, loading }) => {
  return (
    <div className="drinks-container">
      {!loading && drinks !== null ? (
        drinks.map((drink) => {
          return <Drink key={drink.idDrink} props={drink} />;
        })
      ) : (
        <h1 id="error-txt">No drinks match your search... Try again</h1>
      )}
    </div>
  );
};

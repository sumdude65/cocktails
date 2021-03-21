import React, { useContext } from "react";
import { AppContext } from "../context";
import { Link, useParams } from "react-router-dom";
import "../../style.scss";

export const DrinkPage = () => {
  const { id } = useParams();
  const { data, loading } = useContext(AppContext);

  if (!loading) {
    var specificData = data.drinks.filter((drink) => {
      return drink.idDrink === id;
    })[0];
    if (specificData) {
      var {
        strDrink,
        strDrinkThumb,
        strCategory,
        strAlcoholic,
        strGlass,
        strInstructions,
      } = specificData;

      //grabs the ingredients max 10
      var ingredients = [];
      for (let i = 1; i < 10; i++) {
        if (specificData[`strIngredient${i}`] !== null) {
          ingredients.push(specificData[`strIngredient${i}`]);
        } else if (specificData[`strIngredient${i}`] === null) {
          break;
        }
      }
    }
  }
  return (
    <div className="drink-page">
      <Link className="btn" to="/">
        Back to Home
      </Link>
      {!specificData ? (
        <h1>No Cocktail to display</h1>
      ) : (
        <div className="info">
          <header>
            <h1>{strDrink}</h1>
          </header>
          <div className="content">
            <div className="drink-img">
              <img src={strDrinkThumb} alt={strDrink} />
            </div>
            <div className="drink-info">
              <ul>
                <li>
                  <span>Name :</span> {strDrink}
                </li>
                <li>
                  <span>Category :</span> {strCategory}
                </li>
                <li>
                  <span>Info :</span> {strAlcoholic}
                </li>
                <li>
                  <span>Glass :</span> {strGlass}
                </li>
                <li>
                  <span>Instructions :</span> {strInstructions}
                </li>
                <li>
                  <span>Ingredients :</span>{" "}
                  {ingredients.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

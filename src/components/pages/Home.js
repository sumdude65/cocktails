import React, { useContext } from "react";
import { AppContext } from "../context";
import { DrinkList } from "../DrinkList";

export const Home = () => {
  const { input, handleChange, data, loading } = useContext(AppContext);
  return (
    <div className="page">
      <div className="input">
        <h1>Search your favorite cocktail</h1>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter a cocktail name.."
        />
      </div>
      <div className="cocktail-list">
        {loading ? <h1>loading</h1> : <DrinkList {...data} props={loading} />}
      </div>
    </div>
  );
};

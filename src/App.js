import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Navbar } from "./components/pages/Navbar";
import { Error } from "./components/pages/Error";
import { DrinkPage } from "./components/pages/DrinkPage";
import { AppContext } from "./components/context";
import { useFetch } from "./components/fetch";
import "./style.scss";

export const App = () => {
  const [url] = useState(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );
  const [input, setInput] = useState("");
  const { loading, data } = useFetch(url + encodeURIComponent(input));
  //updates input
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <AppContext.Provider value={{ input, loading, data, handleChange }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/drinks/:id" children={<DrinkPage />} />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

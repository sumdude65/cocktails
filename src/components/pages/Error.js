import React from "react";
import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <div className="page light">
      <Link to="/" className="btn">
        Back to Home
      </Link>
      <h1>Error: page doesn't exist</h1>
    </div>
  );
};

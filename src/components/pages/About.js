import React from "react";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div className="drink-page ">
      <Link to="/" className="btn">
        Back to Home
      </Link>
      <h1>About</h1>
      <p className="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        dignissimos similique numquam fuga nobis fugiat reprehenderit placeat
        eligendi nesciunt distinctio nisi? Unde non omnis voluptates ex cumque
        odio nam minus?
      </p>
    </div>
  );
};

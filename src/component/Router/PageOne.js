import React from "react";
import { Link } from "react-router-dom";

function PageOne(props) {
  return (
    <div>
      <h1>Page One</h1>
      <Link to="/page-2">Page-2</Link>
    </div>
  );
}

export default PageOne;

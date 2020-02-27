import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/:symbol/details" component={Details} />
    </BrowserRouter>
  );
}

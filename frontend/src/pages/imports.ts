import React from "react";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { ROUTES } from "../shared/helpers";
const Main = React.lazy(() => import("./main/index"));

export { React, Router, Route, Routes, ROUTES, BrowserRouter, Main };

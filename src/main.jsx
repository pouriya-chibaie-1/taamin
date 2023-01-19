import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./components/navigation/Navigation";
import Slider from "./components/slider/Slider";
import Gradient from "./components/gradient/Gradient";
import ArticleCard from "./components/articleCard/ArticleCard";

import Category from "./pages/Category";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ArticleMostRead from "./components/ArticleMostRead/ArticleMostRead";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Product from "./pages/Product";

import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Error from "./pages/Error";
import { ContextProvider } from "./context";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Category />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/news",
    element: <Articles />,
  },
  {
    path: "/article",
    element: <Article />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={router}/>
  </ContextProvider>

);

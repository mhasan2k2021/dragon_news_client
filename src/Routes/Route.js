import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/pages/Home/Home";
import LogIn from "../components/pages/LogIn/LogIn";
import SingUp from "../components/pages/SignUp/SingUp";
import Category from "../components/pages/Category/Category";
import OneNews from "../components/pages/OneNews/OneNews";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivetRoute>
            <OneNews></OneNews>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },

      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SingUp></SingUp>,
      },
    ],
  },
]);

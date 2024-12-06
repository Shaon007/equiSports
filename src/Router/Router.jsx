import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AddNewProduct from "../Pages/AddNewProduct";
import UpdateProduct from "../Pages/UpdateProduct";
import MyProduct from "../Pages/MyProduct";
import ProductDetails from "../Pages/ProductDetails";
import AllProduct from "../Pages/AllProduct";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPass from "../Pages/ForgotPass";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    // loader: () => fetch('http://localhost:5000/product'),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/product'),
      },
      {
        path: "/addNewProduct",
        element: (
          <PrivateRoute>
            <AddNewProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct />,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: "/myProduct",
        element: (
          <PrivateRoute>
            <MyProduct />
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:5000/product'),
      },
      {
        path: "/allProduct",
        element: <AllProduct />,
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),

      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot",
        element: <ForgotPass />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

    ],
  },
]);

export default router;
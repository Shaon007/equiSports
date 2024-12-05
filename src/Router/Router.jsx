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
        element: <AddNewProduct />,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct />,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: "/myProduct",
        element: <MyProduct />,
      },
      {
        path: "/allProduct",
        element: <AllProduct />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
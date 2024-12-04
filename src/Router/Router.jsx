import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AddNewProduct from "../Pages/AddNewProduct";
import UpdateProduct from "../Pages/UpdateProduct";
import MyProduct from "../Pages/MyProduct";

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
        path: "/updateProduct",
        element: <UpdateProduct />,
      },
      {
        path: "/myProduct",
        element: <MyProduct />,
      },
    ],
  },
]);

export default router;
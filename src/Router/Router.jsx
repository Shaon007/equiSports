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
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
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
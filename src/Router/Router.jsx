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
import MyProfile from "../Component/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: () => fetch('https://equi-sports-server-psi.vercel.app/product'),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://equi-sports-server-psi.vercel.app/product'),
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
        loader: ({ params }) => fetch(`https://equi-sports-server-psi.vercel.app/product/${params.id}`)
      },
      {
        path: "/myProduct",
        element: (
          <PrivateRoute>
            <MyProduct />
          </PrivateRoute>
        ),
        loader: () => fetch('https://equi-sports-server-psi.vercel.app/product'),
      },
      {
        path: "/allProduct",
        element: <AllProduct />,
        loader: () => fetch('https://equi-sports-server-psi.vercel.app/product')
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
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },

    ],
  },
]);

export default router;
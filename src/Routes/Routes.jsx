import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signin",
        element: <Login></Login>
      },{
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
        loader: ({params}) => fetch(`https://car-doctor-server-omega-ten-29.vercel.app/services/${params.id}`)
      },
      {
        path: "/bookings",
        element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
      }
    ]
  },
]);


export default router;
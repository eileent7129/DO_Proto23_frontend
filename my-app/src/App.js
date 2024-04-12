import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Followers from "./Pages/Followers";
import ViewItem from "./Pages/ViewItem";
import ShoppingCart from "./Pages/ShoppingCart";
import Dashbaord from "./Pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const my_router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/followers", element: <Followers /> },
  { path: "/viewItem", element: <ViewItem /> },
  { path: "/shoppingCart", element: <ShoppingCart /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={my_router} />
    </>
  );
}

export default App;

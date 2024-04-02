import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Followers from "./Followers";
import ViewItem from "./ViewItem";
import Dashbaord from "./Pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const my_router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={my_router} />
    </>
  );
}

export default App;

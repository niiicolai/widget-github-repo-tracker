import Dashboard from "../dashboard/dashboard";
import Home from "../documentation/home";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

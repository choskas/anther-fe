import App from "@/App";
import { useAuth } from "@/context/Auth";
import Dashboard from "@/pages/Dashboard";
import Layout from "@/pages/Layout";
import Logout from "@/pages/Logout";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

export const ProtectedRoute = () => {
    const { token } = useAuth();
  
    if (!token) {
      return <Navigate to="/" />;
    }
  
    return <Layout />;
  };

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];


  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, 
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/profile",
          element: <div>Mi cuenta</div>,
        },
        {
            path: "/dashboard/flights",
            element: <div>vuelos</div>,
          },
          {
            path: "/dashboard/downloads",
            element: <div>Descargas</div>,
          },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <div>Login</div>,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Dashboard from "./pages/Dashboard";
import Cards from "./components/Cards";
import ProductDetails from "./components/productDetails";
import Cart from "./components/Cart";
import WishList from "./components/WishList";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./components/ErrorPage";
import { HelmetProvider } from "react-helmet-async";
import Faqs from "./pages/Faqs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch("../productData.json"),
          },
          {
            path: "/cards/:category",
            element: <Cards></Cards>,
            loader: () => fetch("../productData.json"),
          },
        ],
      },
      {
        path: "/details/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../productData.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/faqs",
        element: <Faqs></Faqs>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/cart",
            element: <Cart></Cart>,
            loader: () => fetch("../productData.json"),
          },
          {
            path: "/dashboard/wishlist",
            element: <WishList></WishList>,
            loader: () => fetch("../productData.json"),
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    <Toaster />
  </StrictMode>
);

import React from "react";
import Navbar from "./components/navbar/navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "./components/footer/Footer";
import Gigs from "./pages/gigs/gigs";
import Gig from "./pages/gig/gig";
import Orders from "./pages/orders/orders";
import MyGigs from "./pages/mygigs/mygigs";
import Messages from "./pages/messages/messages";
import Message from "./pages/message/message";
import Add from "./pages/add/add";
import "./App.scss";
function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

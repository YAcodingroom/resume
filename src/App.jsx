import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./ui/Home";
import Portfolios from "./portfolios/Portfolios";
import About from "./about/About";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/portfolios", element: <Portfolios /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

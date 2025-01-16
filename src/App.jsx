import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Country from "./Pages/Country";
import Home from "./Pages/Home";
import AppLayout from "./Components/Layout/AppLayout";
import ErrorPage from "./Pages/ErrorPage";
import CountryDetails from "./Components/Layout/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement : <ErrorPage/>,
    children : [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "country",
        element: <Country />,
      }

    ]
  },
  
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      
      
    </>
  );
}

export default App;

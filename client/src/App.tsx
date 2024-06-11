import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StandardLayout } from "./layouts/StandardLayout";
import { WelcomePage } from "./pages/WelcomePage";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { ReactNode } from "react";
import { Register } from "./pages/Register";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";

function StandardPage({ page }: { page: ReactNode }) {
  return <StandardLayout>{page}</StandardLayout>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <StandardPage page={<WelcomePage />} />,
  },
  {
    path: "/About",
    element: <StandardPage page={<About />} />,
  },
  {
    path: "/*",
    element: <StandardPage page={<Error />} />,
  },
  {
    path: "/Register",
    element: <StandardPage page={<Register />} />,
  },
  {
    path: "/Contacts",
    element: <StandardPage page={<Contacts />} />,
  },
  {
    path: "/Home",
    element: <StandardPage page={<Home />} />,
  },
]);

/**
 * Renders the Main App component - bootstrap for the entire app.
 * @return {JSX.Element} The rendered App component.
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
